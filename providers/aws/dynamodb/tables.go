package instances

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/sts"
	. "github.com/mlabouardy/komiser/models"
	. "github.com/mlabouardy/komiser/providers"
)

func Tables(ctx context.Context, client ProviderClient) ([]Resource, error) {
	resources := make([]Resource, 0)
	var config dynamodb.ListTablesInput
	dynamodbClient := dynamodb.NewFromConfig(*client.AWSClient)
	output, err := dynamodbClient.ListTables(ctx, &config)
	if err != nil {
		return resources, err
	}

	stsClient := sts.NewFromConfig(*client.AWSClient)
	stsOutput, err := stsClient.GetCallerIdentity(ctx, &sts.GetCallerIdentityInput{})
	if err != nil {
		return resources, err
	}

	accountId := stsOutput.Account

	for _, table := range output.TableNames {
		resourceArn := fmt.Sprintf("arn:aws:dynamodb:%s:%s:table/%s", client.AWSClient.Region, *accountId, table)
		outputTags, err := dynamodbClient.ListTagsOfResource(ctx, &dynamodb.ListTagsOfResourceInput{
			ResourceArn: &resourceArn,
		})

		tags := make([]Tag, 0)

		if err == nil {
			for _, tag := range outputTags.Tags {
				tags = append(tags, Tag{
					Key:   *tag.Key,
					Value: *tag.Value,
				})
			}
		}

		resources = append(resources, Resource{
			Provider:   "AWS",
			Account:    client.Name,
			Service:    "DynamoDB",
			ResourceId: resourceArn,
			Region:     client.AWSClient.Region,
			Name:       table,
			Cost:       0,
			Tags:       tags,
			FetchedAt:  time.Now(),
		})
	}
	log.Printf("[%s] Fetched %d AWS DynamoDB tables from %s\n", client.Name, len(resources), client.AWSClient.Region)
	return resources, nil
}

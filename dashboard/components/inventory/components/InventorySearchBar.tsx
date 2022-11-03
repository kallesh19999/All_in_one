type Props = {
  query: string;
  setQuery: (query: string) => void;
};

function InventorySearchBar({ query, setQuery }: Props) {
  return (
    <div className="relative rounded-lg rounded-b-none overflow-hidden">
      {!query ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          className="absolute top-[1.125rem] left-6 dark:text-black-150"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2"
          ></path>
        </svg>
      ) : (
        <svg
          onClick={() => setQuery('')}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          className="absolute top-[1.175rem] left-6 dark:text-black-150 cursor-pointer"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7.757 16.243l8.486-8.486M16.243 16.243L7.757 7.757"
          ></path>
        </svg>
      )}

      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="text"
        placeholder="Search by tags, service, name, region..."
        className="w-full py-4 pl-14 pr-6 text-sm bg-white dark:bg-purplin-700 text-black-900 dark:text-black-100 placeholder:text-black-300 caret-primary border-b border-black-150 dark:border-purplin-650 dark:caret-black-100 focus:outline-none"
      />
    </div>
  );
}

export default InventorySearchBar;

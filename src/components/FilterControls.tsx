import { FilterOption, SortOption } from "../types/incident";

interface FilterControlsProps {
  filter: FilterOption;
  sort: SortOption;
  onFilterChange: (filter: FilterOption) => void;
  onSortChange: (sort: SortOption) => void;
}

export const FilterControls = ({
  filter,
  sort,
  onFilterChange,
  onSortChange,
}: FilterControlsProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div className="flex items-center space-x-2">
        <label htmlFor="filter" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Filter by:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value as FilterOption)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700"
        >
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <label htmlFor="sort" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Sort by:
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};
// hooks/useFilteredAccounts.js
import { useState, useMemo } from "react";
import { useDebounceCallback } from "usehooks-ts";

export function useFilteredAccounts(accounts = [], options = {}) {
  // Extract options with default values
  const { initialLimit = 10 } = options;

  // State for input and debounced search term
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // State for filters and pagination
  const [mainType, setMainType] = useState("all_types");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(initialLimit);

  // Debounced setter for searchTerm
  const debouncedSetSearchTerm = useDebounceCallback(setSearchTerm, 300);

  // Handle input change with debouncing
  const handleInputChange = (value) => {
    setInputValue(value);
    debouncedSetSearchTerm(value);
    setCurrentPage(1);
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    if (filterType === "mainType") {
      setMainType(value);
    }
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Handle limit change
  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setCurrentPage(1);
  };

  // Memoize filtered accounts
  const filteredAccounts = useMemo(() => {
    if (!accounts) return [];

    let filtered = accounts;

    // Apply search term
    if (searchTerm.trim() !== "") {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (account) =>
          (account.accountType?.name?.toLowerCase() || "").includes(lowerSearch) ||
          (account.accountType?.code?.toString() || "").includes(lowerSearch)
      );
    }

    // Apply mainType filter
    if (mainType !== "all_types") {
      filtered = filtered.filter(
        (account) => account.accountType.category.mainType === mainType
      );
    }

    return filtered;
  }, [accounts, searchTerm, mainType]);

  // Memoize paginated accounts
  const paginatedAccounts = useMemo(() => {
    const start = (currentPage - 1) * limit;
    return filteredAccounts.slice(start, start + limit);
  }, [filteredAccounts, currentPage, limit]);

  const totalPages = Math.ceil(filteredAccounts.length / limit);

  return {
    // Filter states
    inputValue,
    mainType,
    // Pagination states
    currentPage,
    limit,
    totalPages,
    // Data
    filteredAccounts,
    paginatedAccounts,
    // Handlers
    handleInputChange,
    handleFilterChange,
    handlePageChange,    // Changed from setCurrentPage
    handleLimitChange,   // Changed from setLimit
  };
}

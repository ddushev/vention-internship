import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { WUPTextControl } from "web-ui-pack";

import { Game } from "@/types";
import getProducts from "@/api/apiProducts";

export default function useLoadingGamesCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    criteria: searchParams.get("sortCriteria") || "name",
    type: searchParams.get("sortType") || "ascending",
    genre: searchParams.get("genre") || "all",
    age: searchParams.get("minAge") || "all",
  });
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFilterChange = (model: object) => {
    setFilters((state) => ({ ...state, ...model }));
  };

  const handleSearchInputChange = (event: CustomEvent) => {
    const search = (event.target as WUPTextControl).$value as string;
    setSearchTerm(search);
  };

  useEffect(() => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("sortCriteria", filters.criteria);
    updatedSearchParams.set("sortType", filters.type);
    updatedSearchParams.set("genre", filters.genre);
    updatedSearchParams.set("minAge", filters.age);

    if (searchTerm) {
      updatedSearchParams.set("searchText", searchTerm);
    } else {
      updatedSearchParams.delete("searchText");
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getProducts({ urlParams: updatedSearchParams.toString() });
        setGames(data);
      } finally {
        setIsLoading(false);
      }
    };

    if (isFirstRender) {
      fetchData();
      setIsFirstRender(false);
    } else if (updatedSearchParams.toString() !== searchParams.toString()) {
      fetchData();
    }

    setSearchParams(() => updatedSearchParams);
  }, [searchParams, searchTerm, filters]);

  return {
    games,
    isLoading,
    handleFilterChange,
    handleSearchInputChange,
  };
}

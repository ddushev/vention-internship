import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { WUPRadioControl, WUPSelectControl, WUPTextControl } from "web-ui-pack";

import { Game } from "@/components/gameCard/gameCard";
import getProducts from "@/api/apiProducts";

export default function useLoadingGamesCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState(searchParams.get("sortCriteria") || "name");
  const [sortType, setSortType] = useState(searchParams.get("sortType") || "ascending");
  const [genreFilter, setGenre] = useState(searchParams.get("genre") || "all");
  const [ageFilter, setAge] = useState(searchParams.get("minAge") || "all");
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSearchInputChange = (event: CustomEvent) => {
    const search = (event.target as WUPTextControl).$value as string;
    setSearchTerm(search);
  };

  const handleCriteriaInputChange = (event: CustomEvent) => {
    const criteria = (event.target as WUPSelectControl).$value as string;
    setSortCriteria(criteria);
  };

  const handleTypeInputChange = (event: CustomEvent) => {
    const sort = (event.target as WUPSelectControl).$value as string;
    setSortType(sort);
  };

  const handleGenreInputChange = (event: CustomEvent) => {
    const genre = (event.target as WUPRadioControl).$value as string;
    setGenre(genre);
  };

  const handleAgeInputChange = (event: CustomEvent) => {
    const age = (event.target as WUPRadioControl).$value as string;
    setAge(age);
  };

  useEffect(() => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("sortCriteria", sortCriteria);
    updatedSearchParams.set("sortType", sortType);
    updatedSearchParams.set("genre", genreFilter);
    updatedSearchParams.set("minAge", ageFilter);

    if (searchTerm) {
      updatedSearchParams.set("searchText", searchTerm);
    } else {
      updatedSearchParams.delete("searchText");
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getProducts({ urlParams: updatedSearchParams.toString() });
        setGames(data);
      } finally {
        setLoading(false);
      }
    };

    if (isFirstRender) {
      fetchData();
      setIsFirstRender(false);
    } else if (updatedSearchParams.toString() !== searchParams.toString()) {
      fetchData();
    }

    setSearchParams(() => updatedSearchParams);
  }, [searchParams, searchTerm, sortCriteria, sortType, genreFilter, ageFilter]);

  return {
    games,
    loading,
    handleSearchInputChange,
    handleCriteriaInputChange,
    handleTypeInputChange,
    handleGenreInputChange,
    handleAgeInputChange,
  };
}

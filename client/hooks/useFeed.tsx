import axios from "axios";
import { useState } from "react";
import { Feed } from "./interfaces";

export const useFeed = (endpointUrl: string, pageSize: number) => {
  const [data, setData] = useState<Feed[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [pageCount, setPageCount] = useState(undefined);
  const [page, setPage] = useState(1);

  const url = `${endpointUrl}/?PAGE_SIZE=${pageSize}&PAGE=${page}`;
  const fetch = async () => {
    if (!pageCount || page <= pageCount)
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        await new Promise((r) => setTimeout(r, 2000));
        setData([...data, ...response.data.feed]);
        setPageCount(response.data.pageCount);
        setPage(page + 1);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
  };

  return { data, error, errorMessage, isLoading, fetch };
};

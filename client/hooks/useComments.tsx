import axios from "axios";
import { useState } from "react";
import { FeedComment } from "./interfaces";

export const useComments = (endpointUrl: string, briefRef: string) => {
  const [data, setData] = useState<FeedComment[]>([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const url = `${endpointUrl}/${briefRef}`;
  const fetch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      if (error.response.status === 404) {
        setErrorMessage("No comments found.");
      } else {
        setErrorMessage(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, errorMessage, isLoading, fetch };
};

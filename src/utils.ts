import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGE_PER_PAGE = 20;

export const useFetchImages = (query: string | undefined) => {
  const [images, setImages] = useState([]),
    [totalPages, setTotalPages] = useState(0);

  const fetchImages = async (value: string | undefined) => {
    if (!value) return;
    try {
      const { data } = await axios.get(
        `${API_URL}?query=${value}&page=1&per_page=${IMAGE_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchImages(query);
  }, [query]);

  return { images, totalPages };
};

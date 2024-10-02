import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const handler = () => setMatches(media.matches);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;

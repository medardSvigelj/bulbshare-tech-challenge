import { useEffect, useState } from "react";

export const useIntersectionObserver = (ref: Element | null) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(updateEntry);

    if (ref !== null) {
      observer.observe(ref);
    }

    return () => observer.disconnect();
  }, [ref]);

  return entry;
};

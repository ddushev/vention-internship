// Debounce function
const debounce = (func: (query: string) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return (query: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(query), delay);
  };
};

export default debounce;

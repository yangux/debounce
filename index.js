function debounce(func, wait = 1000, immediate) {
  let timer;

  const debounced = (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, wait);
  };

  return debounced;
}

function search(text) {
  console.log(`search '${text}'`);
}

const debouncedSearch = debounce(search);

search("zip");
search("zip");
search("zip");
debouncedSearch("zip");
debouncedSearch("zip");
debouncedSearch("zip");
debouncedSearch("zip");

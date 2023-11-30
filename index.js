function debounce(func, wait = 1000, immediate = false) {
  let timeout;

  function debounced(...args) {
    const callFirst = immediate && !timeout;
    if (callFirst) func(...args);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!immediate) {
        func(...args);
      }
    }, wait);
  }

  return debounced;
}

function search(text) {
  console.log(`search '${text}'`);
}

const debouncedSearch = debounce(search, undefined, true);

debouncedSearch("zip");
debouncedSearch("zip");
debouncedSearch("zip");
debouncedSearch("zipup");

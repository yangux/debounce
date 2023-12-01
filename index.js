function debounce(func, wait = 1000, immediate = false) {
  let timeout;

  return function debounced(...args) {
    return new Promise((resolve, reject) => {
      const callFirst = immediate && !timeout;
      if (callFirst) func(...args);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!immediate) {
          func(...args);
          resolve("[RESOLVED] 원래 함수 실행 완료");
        } else {
          reject("[REJECTED] 첫 번째 함수 즉시 실행");
        }
      }, wait);
    });
  };
}

function search(text) {
  console.log(`search '${text}'`);
}

const debouncedSearch = debounce(search, undefined, true);

debouncedSearch("zip")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
debouncedSearch("zip")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
debouncedSearch("zip")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
debouncedSearch("zipup")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

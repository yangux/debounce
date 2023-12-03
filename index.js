function debounce(func, wait = 1000, immediate = false) {
  let timeout;

  return {
    debounced(...args) {
      return new Promise((resolve, reject) => {
        const callFirst = immediate && !timeout;
        if (callFirst) {
          func(...args);
          reject("[REJECTED] 첫 번째 함수 즉시 실행");
        }

        clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (!immediate) {
            resolve(func(...args));
          }
        }, wait);
      });
    },
    cancel() {
      clearTimeout(timeout);
    },
  };
}

function search(text) {
  console.log(`search '${text}'`);
}

const { debounced, cancel } = debounce(search, undefined, true);

debounced("zip").catch((err) => console.log(err));
debounced("zip");
debounced("zip");
debounced("zipup");

// cancel();

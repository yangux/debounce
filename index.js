function debounce(func, wait = 1000, immediate = false) {
  let timeout;

  return {
    debounced(...args) {
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
    },
    cancel() {
      clearTimeout(timeout);
    },
  };
}

function search(text) {
  console.log(`search '${text}'`);
}

const { debounced, cancel } = debounce(search, undefined, false);

debounced("zip")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
debounced("zip")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
debounced("zip")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
debounced("zipup")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

cancel();

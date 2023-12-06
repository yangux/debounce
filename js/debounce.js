export default function debounce(func, wait = 1000, immediate = false) {
  let timeout;

  return {
    debounced(...args) {
      return new Promise((resolve) => {
        const callFirst = immediate && !timeout;
        if (callFirst) func(...args);

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

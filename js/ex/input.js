import debounce from "../debounce.js";

const inputArea = document.querySelector(".inputArea");
const input = inputArea.querySelector("input");
const output = inputArea.querySelector("p > span:last-child");
const btn = inputArea.querySelector("button");

function update(text) {
  output.textContent = text;
}

const { debounced, cancel } = debounce(update, undefined, false);

input.addEventListener("input", (e) => {
  debounced(e.target.value).catch((err) => console.log(err));
});

btn.addEventListener("click", () => {
  cancel();
});

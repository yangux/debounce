import jest from "jest-mock";
import debounce from "../js/debounce.js";

const mockFn = jest.fn();

beforeEach(() => {
  mockFn.mockReset();
});

test("마지막 함수 1번만 실행", async () => {
  const wait = 1000;
  const { debounced } = debounce(mockFn, wait, false);

  debounced("zip");
  debounced("zip");
  debounced("zipup");

  await new Promise((resolve) => setTimeout(resolve, wait));
  expect(mockFn).toHaveBeenCalledWith("zipup");
  expect(mockFn).toHaveBeenCalledTimes(1);
});

test("첫번째 함수 즉시 실행", () => {
  const wait = 1000;
  const { debounced } = debounce(mockFn, wait, true);

  debounced("zip");
  debounced("zip");
  debounced("zipup");

  expect(mockFn).toHaveBeenCalledWith("zip");
  expect(mockFn).toHaveBeenCalledTimes(1);
});

test("타이머 취소", async () => {
  const wait = 1000;
  const { debounced, cancel } = debounce(mockFn, wait, false);

  debounced("zip");
  debounced("zip");
  debounced("zipup");

  cancel();

  await new Promise((resolve) => setTimeout(resolve, wait));
  expect(mockFn).toHaveBeenCalledTimes(0);
});

# debounce

일정 시간 내에 이벤트가 여러 번 발생할 때, 마지막 이벤트만 실행되도록 한다.

## 기능

1. wait 값에 따른 타이머 생성, 타이머 종료시 func 실행
2. immediate 옵션: 첫 번째 함수 호출 즉시 실행
3. cancel 메소드: 타이머 취소
4. 프로미스 반환, func 실행 완료 시 resolve

## 기본 형태

```
function debounce(func, wait, immediate) {
 // ... 구현 ...
 return {
 // ... 반환된 객체는 debounced 함수와 cancel 메소드를 포함해야 합니다 ...
 };
}
```

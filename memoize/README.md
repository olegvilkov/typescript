# Задание memoize

Напишите memoize (без параметра-хэшера).
Написанная функция должна возвращать дженерик.
([источник](https://habr.com/ru/company/ruvds/blog/419993/))

----
## Usage:

```typescript
const add = (a: number, b: number) => {
    console.log('add executed');
    return a + b
};
const memoizeAdd = memoize(add);

// Add function executed
console.log(memoizeAdd(2, 5)); // add executed, 7

// Add function is not executed
console.log(memoizeAdd(2, 5)); // 7

// Add function executed
console.log(memoizeAdd(2, 7)); // add executed, 9

// Add function is not executed
console.log(memoizeAdd(2, 7)); // 9

// Add function executed, cached result was lost becose its not same as last call
console.log(memoizeAdd(2, 5)); // add executed, 7
```

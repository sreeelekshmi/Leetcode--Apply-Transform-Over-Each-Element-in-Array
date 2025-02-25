function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result: number[] = [];
    
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    
    return result;
}

// Example usage:
const arr = [1, 2, 3, 4];
const fn = (n: number, i: number) => n * 2 + i;

console.log(map(arr, fn)); // [2, 5, 8, 11]

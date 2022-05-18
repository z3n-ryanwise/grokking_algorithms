function sum_tail_recursive(arr, running_total = 0) {
  if (arr.length === 0) {
    return running_total; // Base case
  } else {
    return sum_tail_recursive(arr.slice(1, arr.length), running_total + arr[0]);
  }
}

console.log(sum_tail_recursive([1, 2, 3, 4]));

import { Pipe } from "@angular/core";
function fibonacciWithMemoization(num: number): number {
  console.log('executes fibonacciWithMemoization')
  const memo = [0, 1];
  const fibonacci = (num: number): number => {
    if (memo[num] != null) return memo[num];
    return (memo[num] = fibonacci(num - 1) + fibonacci(num - 2));
  };
  return fibonacci(num);
}
@Pipe({
  name: 'fibonacci',
  pure: true,
  standalone: true
})
export class FibonacciPipe extends Pipe {
  transform(value: number): number {
    return fibonacciWithMemoization(value);
  }
}


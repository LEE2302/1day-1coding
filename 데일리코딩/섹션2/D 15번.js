//두 수(num1, num2)를 입력받아, num1를 num2로 나눈 나머지를 리턴해야 합니다.

function modulo(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  //num1과 num2를 빼서 num1을 계속 빼고 뺀값을 다른곳에 할당 한후 반복
  //num1보다 num2가 크면 반복종료
  let num = num1;

  if (num1 === 0) {
    return 0;
  }
  if (num2 === 0) {
    return "Error: cannot divide by zero";
  }

  while (num >= num2) {
    num = num - num2;
  }

  return num;
}

//   레퍼런스
//   function modulo(num1, num2) {
//     if (num2 === 0) {
//       return 'Error: cannot divide by zero';
//     }

//     while (num1 >= num2) {
//       num1 = num1 - num2;
//     }

//     return num1;
//   }

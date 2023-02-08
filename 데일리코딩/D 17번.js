//수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴해야 합니다.

function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 수소점 2자리에서 반올림을 해야하기때문에 3자리 까지 구하기 위한 변수
  const diggit = [1, 0.1, 0.01, 0.001];
  //제곱근을 구하기 위한 값들이 할당되는 변수
  let a = 0;

  for (d of diggit) {
    //웨일문 거짓일때 까지 반복
    //a*a를 해서 num보다 커지지 않는 그 수가 먼저 정수이고, 소수점 3자리까지 반복
    while (a * a < num) {
      a = a + d;
    }
    if (a * a === num) {
      //바로 곱해서 맞아 떨어지면 a리턴
      return a;
    } else {
      //위 웨일문에서 거짓을 하기위해 한번더 더해졌기 때문에 한번을 빼준다
      //ex) 정수 6에 제곱근은 2.xxx인데 a가 3이 되어야 거짓이기 때문에
      // 조건때문에 한번더 더해진다. 그래서 -b를 통해 값을 구할 수 있음.
      a = a - d;
    }
  }
  //주의사항으로 Math.sqrt를 사용하지 말라 했기에
  //Number내장 객체인 .toFixed를 통해 값을 반올림.
  return Number(a.toFixed(2));
}

// function computeSquareRoot(num) {
//   const digit = [1, 0.1, 0.01, 0.001];
//   let a = 0;

//   for (d of digit) {
//   	while ( a*a < num ) {
//     	a = a+d;
//     }
//     if (a*a === num) {
//       return a;
//     }
//     else {
//       a = a - d;
//     }
//   }
//   return Number(a.toFixed(2));
// }

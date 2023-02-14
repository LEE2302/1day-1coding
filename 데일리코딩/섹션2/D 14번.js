//수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.

function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  //1. 합보다 큰지 비교 => 비교할 대상 선정
  //2. arr[0]로 초기값설정 비교
  //3. 반복문을 통하여 초기값과 비교 초기값이 크면 펄스
  //=> 각 요소들(현재 요소)이 그 이전의 합보다 커야 트루이기 때문
  //4. 초기값을 arr배열 첫번째 인덱스(0번째 인덱스)로 했기에 반복문 1부터(1번째 인덱스) 시작
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (sum >= arr[i]) {
      return false;
    }
    sum += arr[i];
  }
  return true;
}

//   //레퍼런스
//   function superIncreasing(arr) {
//     let sum = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] <= sum) {
//         return false;
//       }
//       sum = sum + arr[i];
//     }
//     return true;
//   }

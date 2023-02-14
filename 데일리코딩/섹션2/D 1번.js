function transformFirstAndLast(arr) {
    // TODO: 여기에 코드를 작성합니다.
    //배열 arr을 입력받아
    // 차례대로 배열의 첫 요소와 마지막 요소를 가져와라
    // 조건 첫요소는 키로
    // 마지막 요소는 값으로 가져오기
    // 객체를 리턴해야함
  let arr1 = arr[0];
  let arr2 = arr[arr.length-1];
  
  
  let obj = {};
  if(arr.length > 0) obj[arr1] = arr2;
  //리턴을 obj로 했어야 하는데 계속 리턴을 이상한곳에 썼다...
  //리턴을 확실하게 다시 생각해야 겠다.
  return obj;
  console.log(obj);
  }
  
  
  // //레퍼런스 코드
  // function transformFirstAndLast(arr) {
  //   let result = {};
  //   if (arr.length > 0) {
  //     result[arr[0]] = arr[arr.length - 1];
  //   }
  //   return result;
  // }
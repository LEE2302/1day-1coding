function filterCallback(func, arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 함수 func 와 배열 arr을 입력받아 
    //배열에 각 요소에 함수를 적용 했을때
    let result = [];
  
    for (let a of arr) {
      if(func(a)) result.push(a);
    }
    return result;
  };
function computeWhenDouble(interestRate) {
    // TODO: 여기에 코드를 작성합니다.
    //연이율 interestRate 을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴..
    //72 법칙 72로 나누면 된다
    if(interestRate === 1){
      return 70;
    } else if (interestRate < 5){
    return Math.floor(72 / interestRate);  
    }
    return Math.ceil(72 / interestRate);
  }
  
  // 이건 풀이가 이해가 가지 않는다...
// 이해가 됐다!!

  // //레퍼런스코드
  function computeWhenDouble(interestRate) {
    //만약 전달인자가 2.3이라고 과정을 하면
    let rate = 1 + interestRate / 100;
    //1.  1 + 0.023
    let principal = 1;
    //3.         1.023
    let year = 0;
    while (principal < 2) {
        //     2가 되면 2배가 된것이기 때문...
      principal = principal * rate;
      // 2.         1 * 0.023
      //4.         1.023*0.23 .... 쭉쭉 반복 2,3,4번 반복
      year++;
    }
    return year;
  }
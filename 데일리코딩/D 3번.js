//수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

function powerOfTwo(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 거듭제곱을 구할때는 1은 트루를 리턴
    // 홀수는 제외를 시키고 시작을 해아한다.
      if(num === 1) {
        return true;
      }
  
      //홀수를 제외하는 조건문 이유 : 나머지를 구하는 것이기에 나머지가 있어야 트루
      // 나머지가 0이되면 거짓이 되는 것.
      // 나머지가 === 0이면 짝수.
      if(num % 2) {
        return false;
      }
  
    let two = 2;
    while(two < num) {
      two *= 2
    } 
  
    return two === num;
  }
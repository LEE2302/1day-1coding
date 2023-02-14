//문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴해야 합니다.

//내가푼 방식
//먼저 split로 공백을 기준으로 배열을 만들어주고
//변수 하나를 지정하여 문자열이 들어갈 수 있게
//빈문자열이면 빈문자열 리턴하는 조건문 먼저 하고
//배열을 순회하는 반복문 for of를 이용해 각 배열 0번째 인덱스만
//변수에 할당 되도록
function firstCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = str.split(' ');
    let result = '';
  
    if(str === '') {
      return '';
    }
  
    for(let el of arr) {
     result += el[0];
    }
    return result;
  }
  
  
  
  //컨퍼런스
  function firstCharacter(str) {
    if (str === '') {
      return '';
    }
  
    let words = str.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i += 1) {
      result = result + words[i][0];
    }
    return result;
  }
  
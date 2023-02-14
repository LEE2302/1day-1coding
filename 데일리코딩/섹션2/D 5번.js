//문자열을 입력받아 순서가 뒤집힌 문자열을 리턴해야 합니다.

//풀이 : 문자열을 배열로=> .split('');
    //배열을 뒤집기 => .reverse();
    // 뒤집은 배열을 문자열로 => .join('');

function firstReverse(str) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = str.split('');
    
    let arr1 = arr.reverse();
    return arr1.join("");
    }
    
    //레퍼런스 코드
    function firstReverse(str) {
      return str.split('').reverse().join('');
    }
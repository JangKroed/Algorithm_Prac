// 2016년

// 2016년 달력을 월, 일, 요일로 각 변수를 정해서
// 이러쿵 저러쿵 돌리면 짠 하지 않을까?

function solution(a, b) {
    let arr = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    // 1월 1일부터 a월 b일까지 며칠 차이인지 저장할 변수
    let passedDays = 0;
    // a달 전까지의 모든 달에 대해 각 달의 날짜 수 더해줌
    for (let i = 1; i < a; i++) passedDays += arr[i];
    // b일 더해주고 1월 0일이 아닌 1월 1일부터 시작하므로 1 빼줌
    passedDays += b - 1;
    return week[(5 + passedDays) % 7];
  }

// 풀이 - Date이용 1
function solution(a, b) {
    let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let dateStr = "2016-" + a + "- " + b;
    let date = new Date(dateStr);
    return week[date.getDay()];
  }

// 풀이 - Date이용 2
function getDayName(a,b){
    // 월입력 주의 해야함.
    var date = new Date(2016, (a - 1), b);
    // 생성된 Date를 문자열로 변환하면 앞 세글자는 요일의 줄임말.
      return date.toString().slice(0, 3).toUpperCase();
      // Tue May 24 2016 00:00:00 GMT+0900 (대한민국 표준시) 출력.
    //   console.log(date.toString())
  }

// 풀이 - Date이용 3
// var solution=(_,$)=>(new Date(2016,--_,$)+'').toUpperCase().slice(0, 3)

// 강의 풀이
// 1 date 요일반환 구글링
// => .getDay() 0부터 6까지, 일요일부터 토요일
// 월이 문자열로 되어있고 입력값은 숫자이므로

function solution(a, b) {
    var answer = '';
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    
    const dayIndex = new Date(2016, a-1, b).getDay()

    answer = days[dayIndex];

    return answer;
}
// ** JavaScript convert date string

// 강의 풀의 2
function solution(a, b){
    return new Date(2016, a - 1, b).toDateString().split(' ')[0].toUpperCase()
} // 이해를 높이려면 하나씩 할때마다 콘솔찍어보는 단계를 가져보도록 하자


console.log(getDayName(5,24))

// 강의 풀의 주석

// 13번 2016년

// 첫번째 방법

function solution(a, b) {
    let answer = '';
    //getDay() 메서드는 0 ~ 6 (일 ~ 토) 사이의 숫자를 반환 합니다.
    //반환되는 순서에 맞게 days 배열의 요소 값을 지정해줍니다.     
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    //getDay()메서드를 사용해서 2016년 a월 b일이 무슨 요일인지 숫자로 반환 값을 받습니다.
    //반환되는 값이 days 배열의 index값으로 사용되기때문에 변수명을 dayIndex라고 선언합니다. 
    const dayIndex = new Date(2016, a-1, b).getDay();
    
    //days[dayIndex]가 2016년 a월 b일의 요일을 뜻하기 때문에 solution의 반환되는 answer     에 값을 할당 시킵니다.
    answer = days[dayIndex];
    
    return answer;
}

// 두번 째 방법

function solution(a,b) {
    
    //date 클래스의 toDateString 메서드를 사용해서 문자열 타입으로 날짜 값을 구한다음에 ex) new Date(2016, 0, 2).toDateString() === 'Sat Jan 02 2016'
    //spilt 메서드를 사용하서 문자열을 분리합니다. 띄어쓰기(' ') 기준으로 분리 
    //split은 조건에따라 분리된 문자들을 각 요소로 가지는 배열을 반환합니다. ex) 'Sat Jan 02 2016'.split(' ') === ['Sat', 'Jan', '02', '2016']
    //반환된 배열에서 필요한 값은 배열의 첫번째 요소입니다. ex) ['Sat', 'Jan', '02', '2016'][0] === 'Sat';
    // 그리고 그 첫번째 요소의 값을 대문자화 시킵니다.  ex) 'Sat'.toUpperCase() == 'SAT';
    
    const answer = new Date(2016, a-1, b).toDateString().split(' ')[0].toUpperCase();
    
    return answer;
}
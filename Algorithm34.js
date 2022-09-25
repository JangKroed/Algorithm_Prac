// 34번 모의고사
// 강의 풀이

function solution(answers) {
    // 1번 수포자 '1,2,3,4,5'
    // 2번 수포자 '2,1,2,3,2,4,2,5'
    // 3번 수포자 '3,3,1,1,2,2,4,4,5,5'

    // 문자열인지 숫자열인지 확인해보는게 좋음
    const one = [1,2,3,4,5]
    const two = [2,1,2,3,2,4,2,5]
    const thr = [3,3,1,1,2,2,4,4,5,5]

    const results = [0,0,0] // 첫번째 배열부터 1번수포자

    for(let i = 0; i < answers.length; i++){
        // 수포자들의 찍는 방식이 달라 각각 다르게 설정
        if(one[i%one.length] === answers[i]) results[0]++;
        if(two[i%one.length] === answers[i]) results[1]++;
        if(thr[i%one.length] === answers[i]) results[2]++;
    }
    // ...은 스프레드 연산자 (배열을 벗겨준다)

    const maxNumber = Math.max(...result)
    // results = [4,5,5]
    // maxNumber = 5;
    let answer = [];
    // i = 0; answer = [];
    // i = 1; answer = [2];
    // i = 2; answer = [2, 3];

    for(let i = 0; i < results.length; i++){
        if(maxNumber === results[i]) answer.push(i + 1) // 인덱스는 0부터 이고 첫번째 학생 인덱스값은 0이므로 +1
    }
    return answer;
}

// 현업 코딩테스트 기준 크레인 인형뽑기 수준이다.

// 강의 풀의 주석판
// 34번 모의고사

function solution(answers) {
    //1,2,3번 수포자들의 찍는 패턴을 배열 변수로 할당시킵니다.
    const one = [1,2,3,4,5];
    const two = [2,1,2,3,2,4,2,5];
    const three = [3,3,1,1,2,2,4,4,5,5];
    
    //results는 각 수포자들이 몇개의 문제를 맞췄는지 각 배열에 요소에 기입합니다.
    //results[0] = 1번 수포자가 맞춘개수, results[1] = 2번 수포자가 맞춘개수, results[2] = 3번 수포자가 맞춘개수.
    const results = [0,0,0];
    
    //answers에 들어가 있는 각 문제의 답들을 수포자들이 맞췄는지 알기위해서
    //answers의 길이만큼 반복문을 돌립니다.
    for(let i = 0; i < answers.length; i++){
        
        //첫번째 수포자가 각 문제를 맞추면 results[0]에 1씩 더합니다.
        if(one[i%5] === answers[i]) results[0]++;
        
        //두번째 수포자가 각 문제를 맞추면 results[1]에 1씩 더합니다.
        if(two[i%8] === answers[i]) results[1]++;
        
        //세번째 수포자가 각 문제를 맞추면 results[2]에 1씩 더합니다.
        if(three[i%10] === answers[i]) results[2]++;
    }
    
    //1,2,3 수포자가 맞춘 개수중에 제일 많이 맞춘 개수를 구합니다.
    const maxNum = Math.max(...results);
    const answer = [];
    
    //1,2,3 수포자중에 제일 많이 맞춘 수포자(들)을 찾아서 answer 배열에 내림차순으로 집어넣습니다.
    for(let i = 0; i < results.length; i++){
        
        //각 수포자들이 맞춘 문제의 개수와 제일 많이 맞춘 문제의 개수를 비교해서 같으면 answer 배열에 집어넣습니다.
        //i+1이 각 수포자를 뜻합니다.
        if(results[i] === maxNum) answer.push(i+1);
    }
    
    
    
    return answer;
}
// 완주하지 못한 선수

// 배열끼리 반복문으로 조져서 같은값을 제외한 1개를 출력.

function solution(participant, completion) {
    // 참가자의 명수를 구하고
    const n = participant.length;
    let answer = '';
    // 문자열 정렬
    participant.sort();
    completion.sort();
    // i를 n(참가자) 만큼 반복문
    for (let i = 0; i < n; i++){
        // 참가자중 완주자가 아닌값을 구함
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            return answer;
        }
    }
} // 김서방 찾기랑 비슷한듯 ?

// 풀이 - 이거 이해하면 마스터하는건가 ?
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))

// 풀이 2 - 뭔가 비슷
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    // 여기서 for in 하지않고 반복문 쓰는게 좋다는 설이있음
    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}

// 풀이 3 - 이해 해보자
function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}
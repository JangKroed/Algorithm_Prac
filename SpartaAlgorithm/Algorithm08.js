// 핸드폰 번호 가리기

// 뒤에서부터 4자리를 살려야하니
// 반복문으로 뒤에서부터 조지면서
// 5번째 자리부터 총 길이까지 *로 바꿔주면?

function solution(phone_number) {
    // 총길이 - 4
    const len = phone_number.length - 4;
    // 총길이 -4 자리까지 변환
    // + 문자열의 -4자리부터 길이만큼 더하기
    return "*".repeat(len) + phone_number.slice(-4);
}
/**
 * 이번 주차의 중요 키워드 선정 (최소 5가지)
 * 
 * ----------- 팀 과제 ----------------------
 * 
 * for 문이 있는데 for ... in for...of 문법이 새로 나온 이유는 
무엇일까요? 
우리가 이것을 고르는 기준은 무엇일까요?

자바스크립트에서 유사배열과 배열의 
차이는 무엇일까요?
유사배열의 각 요소를 수정하고 싶다면 
어떤 과정을 거쳐야할까요?

restAPI의 put 과 patch 는 어떤 차이점이 있을까요? 
어떤 경우에 사용하면 좋을까요?

몽고DB로 테이블 설계를 해봅시다. 
회원가입을 한 유저가 게시판에 글을 쓰는 서비스입니다.
 게시판 목록 페이지에서는 게시글 제목, 
작성자 이름 등이 보이겠죠? 각각의 모델은 
어떤 모양새이면 좋을까요? 게시판 글 리스트를 
불러오는 api 에서는 몽구스 데이터를 어떻게 
가져오면 좋을까요?

우리가 브라우저에서 구매한 도메인 주소를 
입력하면 만들어 놓은 aws EC2 서버까지 
전달이 되어서 해당 서버에게 요청을 보낼 수 있습니다. 
이 과정이 상세하게 어떻게 진행되는지 
그림으로 한번 그려볼까요?
 *  */

/** 학습목표!! */
/**
 * Javascript의 기초 문법을 이해할 수 있고, 동기 비동기에 대한 설명을 할 수 있다.
 */

/**
 * Express.js의 Request(req), Response(res)가 무엇인지 이해할 수 있고, REST API를 구현할 수 있다.
 */

/**
 * Mongoose 라이브러리를 이용하여 Schema를 작성하고, MongoDB의 정보를 조회 및 삭제할 수 있다.
 */

/**
 * AWS Web Console을 이용하여 EC2를 생성할 수 있고, Express.js 서버를 배포할 수 있다.
 */

/** Node.js 입문 주차 개인 과제 */

/** "Node.js외 express로 로그인 기능이 없는 나만의 항해 블로그 백엔드 서버 만들기" */

/** 학습과제를 끝내고 나면 할수 있는 것들 */
/**
 * 1. Node.js를 이용해서 웹 프레임워크를 구성 할 수 있어요.
 * 2. mongoDB와 mongoose를 이용하여 원하는 데이터베이스를 만들고 활용할 수 있어요.
 * 3. express를 기반으로 CRUD(Create, Read, Update, Delete) 기능이 포함된 REST API를 만들 수 있어요.
 * 4. AWS에 express와 mongoDB 서비스를 배포할 수 있어요.
 * 5. 프로젝트에 필요한 기능을 토대로 API 리스트를 작성해서 백엔드 서버를 설계할 수 있어요.
 */

// 요구사항 들
/**
 * 크게 1. 서비스 완성, 2. Directory, 3. AWS 배포
 */

// 1) 서비스 완성
/**
 * 1. 전체 게시글 목록 조회 API
    - 제목, 작성자명, 작성 날짜를 조회하기
    - 작성 날짜 기준으로 내림차순 정렬하기
 * 2. 게시글 작성 API
    - 제목, 작성자명, 비밀번호, 작성 내용을 입력하기
 * 3. 게시글 조회 API
    - 제목, 작성자명, 작성 날짜, 작성 내용을 조회하기 
    (검색 기능이 아닙니다. 간단한 게시글 조회만 구현해주세요.)
 * 4. 게시글 수정 API
    - API를 호출할 때 입력된 비밀번호를 비교하여 동일할 때만 글이 수정되게 하기
 * 5. 게시글 삭제 API
    - API를 호출할 때 입력된 비밀번호를 비교하여 동일할 때만 글이 삭제되게 하기
 * 6. 댓글 목록 조회
    - 조회하는 게시글에 작성된 모든 댓글을 목록 형식으로 볼 수 있도록 하기
    - 작성 날짜 기준으로 내림차순 정렬하기
 * 7. 댓글 작성
    - 댓글 내용을 비워둔 채 댓글 작성 API를 호출하면 "댓글 내용을 입력해주세요" 라는 메세지를 return하기
    - 댓글 내용을 입력하고 댓글 작성 API를 호출한 경우 작성한 댓글을 추가하기
 * 8. 댓글 수정
    - 댓글 내용을 비워둔 채 댓글 수정 API를 호출하면 "댓글 내용을 입력해주세요" 라는 메세지를 return하기
    - 댓글 내용을 입력하고 댓글 수정 API를 호출한 경우 작성한 댓글을 수정하기
 * 9. 댓글 삭제
    - 원하는 댓글을 삭제하기
 */

// 2 ) Directory Stucture

/**
├── app.js
├── routes
│   ├── index.js
│   ├── comments.js
│   └── posts.js
└── schemas
    ├── index.js
    ├── comment.js
    └── post.js
 */
/**
  * 1. Directory Structure
    - 위와 같은 Directory Structure로 서비스를 구현하기
    - 'Middleware'를 이용하여 Router를 분리해주세요
  */

// 3 ) AWS 배포
/**
 * 1. EC2 배포
    - Ubuntu EC2 를 구매한 뒤, 노드 포트(3000)를 80번 포트로 포워딩해서 포트 번호 없이도 서비스에 접속 가능하도록 하기
     → 수업시간에 배웠던 'iptable'을 사용하기
        
    - mongoDB를 EC2 내부에 설치해서 연결하기
    - 배포 후 ip 주소를 제출해주세요!
 */

// 과제 제출시 고민해보고 함께 제출해야할 답변
/**
 * 1. 수정, 삭제 API의 request를 어떤 방식으로 사용하셨나요? (param, query, body)
 * 2. 어떤 상황에 어떤 방식의 request를 써야하나요?
 * 3. RESTful한 API를 설계했나요? 어떤 부분이 그런가요? 어떤 부분이 그렇지 않나요?
 * 4. 역할별로 Directory Structure를 분리하였을 경우 어떠한 이점이 있을까요?
 */

// API 살짝 개념정리
/**
 * 1. 데이터 조회관련 - GET
 * ex) 게시글 목록을 불러온다거나,
 * 사용자 정보를 불어온다거나 등등
 * 서버에 있는 데이터를 조회 하는 과정에 필요
 *
 * 2. 데이터 작성관련 - POST
 * ex) 댓글이나 게시글을 작성하거나
 * 아이디를 새로 가입한다거나 등등
 * 데이터에 없는 내용을 저장해야 할때 필요
 *
 * 3. 데이터 수정관련 - PUT
 * ex) 게시글이나 댓글을 수정할때.
 * 불러온 데이터를 수정해서 다시 서버로 보내야할때
 * 필요한듯 ?
 *
 * 4. 데이터 삭제관련 - DELETE
 * ex) 게시글이나 댓글을 삭제할때 필요
 */

/**
 * 문득 만들어보고 싶어졌다
 *
 * 버튼으로 된 코드 스니펫이 아닌 링크로 되어있지만
 * 링크만 눌러도 코드가 클립보드에 저장되는 형식
 */

/**
 * 자바 기본기능을 이용한 날짜 포멧팅
 */
var date = new Date();
var a = new Intl.DateTimeFormat("en").format(date);
var b = new Intl.DateTimeFormat("kr", {
  dateStyle: "full",
  timeStyle: "full",
}).format(date);
// 10시간 전 표현 법
var c = new Intl.RelativeTimeFormat().format(-10, "month");
console.log('Intl : ',a);
console.log('Intl : ',b);
console.log('Intl : ',c);

/**
 * 곧 출시할 기능중 Temporal 이란 기능도 있음
 */
import { Temporal } from "@js-temporal/polyfill";
// 현재시간 구하기
var now = Temporal.Now.plainDateTimeISO();
console.log('Temporal : ',now.toString());
var now = Temporal.Now.plainDateISO();
console.log('Temporal : ',now.toString());
var now = Temporal.Now.plainTimeISO();
console.log('Temporal : ',now.toString());

// 시간 덧셈 뺄셈 반올림 하기
var now = Temporal.Now.plainDateTimeISO();
now = now.add({ days: 10, months: 5 });
console.log('Temporal : ',now.toString());
now = now.subtract({ days: 10, months: 5 });
console.log('Temporal : ',now.toString());
now = now.round({ smallestUnit: "hour", roundingMode: "floor" });
console.log('Temporal : ',now.toString());

// 시간차 계산
var Dday = Temporal.PlainDateTime.from('2022-09-30T12:00:00')
var today = Temporal.Now.plainDateTimeISO()

const result = Dday.since(today)

console.log('Temporal : ',result.toString())
console.log('Temporal : ',result.hours)
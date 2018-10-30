# Form CMS

Vue Router와 Vue-CLI 싱글 뷰 컴포넌트를 이용하여 동의서 생성하는 프로그램(CMS) 만들기

### Beta 1.0.0

* 기존의 MPA 페이지와의 호환을 위해 SPA, 뷰 라우터 제거
* 네이버 스마트 에디터 SE2 2.9.1 을 도입
* 동의서를 제작한 뒤 전자서명 및 inputs 관련 태그들을 Drag & Drop 하게 하였다.
* 모든 구성이 끝나면 form을 제출하고 endpoint.php 에서 받은 post값이 랜더링된다.
* 크롬, 사파리에서 폼 제출 시 HTML에 자바스크립트 관련 코드가 있을 경우 -> Blocked By Xss Auditor 에러 발생

### 흐름 

editor.html (에디팅 후 post 전송) -> draganddrop.php (post 값 받은 후 인풋 및 전자서명 추가, 다시 post 전송) -> endpoint.php (post 값 받은 후 랜더링)

### 필수 파일 

./editor.html(SE2 메인), ./draganddrop.php(Vue-CLI 메인), ./endpoint.php, ./smart_editor2_inputarea_ie8.html, ./smart_editor2_inputarea.html

### 필수 폴더 

js(에디터 라이브러리), vuejs(Vue-CLI 번들링 파일), css(에디터 css), sample(포토업로드 라이브러리), img(에디터 이미지)

### References

보시는 분 참고
* src - (Vue-CLI 코드 / 싱글 뷰 컴포넌트)
* references - (작업 기록 및 에디터 참고 코드)

라이브러리 참고
* https://github.com/naver/smarteditor2
* https://github.com/WangShayne/vue-signature
* https://github.com/szimek/signature_pad


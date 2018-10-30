# CMS 만들기

## 목표

* Vue Router와 Vue-CLI 싱글 뷰 컴포넌트를 이용하여 동의서 생성하는 프로그램(CMS)을 SPA로 만들기.

## 현재

* 기존의 MPA 페이지와의 호환을 위해 SPA, 뷰 라우터를 제거
* 네이버 스마트 에디터 SE2 2.9.1  을 도입하였다.
* 동의서를 제작한 뒤 전자서명 및 inputs 관련 태그들을 Drag & Drop 하게 하였다.
* 모든 구성이 끝나면 form을 제출하고 endpoint.php 에서 받은 post값이 랜더링된다.

## 흐름 

* editor.html (에디팅 후 post 전송) -> draganddrop.php (post 값 받은 후 인풋 및 전자서명 추가, 다시 post 전송) -> endpoint.php (post 값 받은 후 랜더링)

## 필수 파일 

* editor.html, draganddrop.php, endpoint.php, smart_editor2_inputarea_ie8.html, smart_editor2_inputarea.html

## 필수 폴더 

* js, css, sample(포토업로드 라이브러리), 

## 참고 폴더

* src (뷰 코드)
---
emoji: 🐈‍⬛
title: 3. 'Shadowing'하여 커스텀 준비하기 | 깃허브 블로그 Gatsby 'minimal-blog' 테마로 마이그레이션 하기
date: '2023-11-03'
categories: github-blog
---

이제 테마를 커스텀을 진행합니다.  
위에서 언급한 “shadowing” 이라는 작업을 해야하는데요, 이 작업은 유저가 src 디렉토리를 바꾸는 작업을 하여 웹팩 번들에 적용해줍니다.

1. [Shadowing](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/)을 위해 문서를 읽고 대충 어떤 느낌인지 읽고 오십시오!
2. 대충이라도 알았다면, 이 테마의 개발자인 `LekoArts`님의 깃허브에 들어가 테마 component를 가져와서 내 프로젝트에 덮어씌워주는 작업을 하겠습니다.
3. [여기에서](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog) `src/내부에 있는 파일`을 아무 곳에 받아줍니다.
4. 받은 파일을 프로젝트 내부에 아래와 같이 배치하여 덮어씌워주세요.

   ```
   // 내 프로젝트의 기존 파일 구성
   src
   ┣ @lekoarts
   ┃ ┣ gatsby-theme-minimal-blog
   ┃ ┃ ┗  texts
   ┗ ┗ pages

    // 받아온 파일을 내 프로젝트에 덮어 씌운 후
   src
   ┣ @lekoarts
   ┃ ┣ gatsby-theme-minimal-blog
   ┃ ┃ ┣ components
   ┃ ┃ ┣ hooks
   ┃ ┃ ┣ styles
   ┃ ┃ ┣ texts
   ┃ ┃ ┗ utils
   ┣ gatsby-plugin-theme-ui
   ┗ utils

   ```

5. `src`에 `@lekoarts`, `gatsby-plugin-theme-ui`, `utils` 이 폴더들이 있어야 하고,  
   `src/@lekoarts/gatsby-theme-minimal-blog`에 `components`, `hooks`, `styles`, `texts`, `utils` 폴더들이 있어야 합니다.  
   `src/@lekoarts/gatsby-theme-minimal-blog` 에 있는 또 다른 `@lekoarts`는 에러가 뜰 수 있으니 그 폴더는 <u>넣지 말아주세요.</u>  
   (저는 기존에 있었던 pages 폴더를 삭제했습니다!)

6. 이렇게 넣어주셨다면 Gatsby의 Shadowing이 활성화되어 커스텀 할 준비가 됩니다!

<br />

# 다음 포스트부터 제가 커스텀 할 목록 입니다!

1. 메인 컬러 변경
2. 메인 페이지 부제목, 링크 한글로 변경
3. 게시글 목록 UI 위치 및 구성 변경 (태그 노출, 게시글 내용 미리보기, 날짜 포맷 변경)
4. 블로그 제목 등 주인장 정보로 교체 (내비게이션 externalLinks 변경)
5. 게시글 상세페이지 타이틀 부분 구성 변경
6. 코드 블럭 폰트 사이즈 변경
7. 웹 폰트 적용

<br />

### \<참고>

[Shadowing in Gatsby Themes](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/)  
[LekoArts / gatsby-themes](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog)

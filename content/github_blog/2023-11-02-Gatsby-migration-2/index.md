---
emoji: 🐈‍⬛
title: 2. Gatsby 프로젝트 설치하기 | 깃허브 블로그 Gatsby 'minimal-blog' 테마로 마이그레이션 하기
date: '2023-11-02'
categories: github-blog-ignore
---

Gatsby에도 Jekyll처럼 테마가 있는데요, 둘의 테마 커스텀 개념은 다릅니다.

Jekyll은 html을 Scss와 Liquid 언어로 UI 위치와 스타일을 조작하고,
Gatsby는 [Shadowing](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/)이라는 것을 이용하여 조작할 수 있습니다.  
저는 욕심냈다가 삽질했지 뭡니까!

저는 그 중에서도 [gatsby-starter-minimal-blog](https://www.gatsbyjs.com/starters/LekoArts/gatsby-starter-minimal-blog) 테마를 선택하여 커스텀했습니다.  
이 테마는 최근 정보가 없어서 예전에 작성되었던 [june kim님의 jekyll to Gatsby 블로그👩‍🔧](https://juneyr.dev/jekyll-to-gatsby-%EB%B8%94%EB%A1%9C%EA%B7%B8-%F0%9F%91%A9%E2%80%8D%F0%9F%94%A7)글에서 많은 도움을 받았습니다.

<br />

# 개발환경

참고로 저는 노드(Node.js) 패키지 관리자로 npm보다 익숙한 `yarn`을 사용했고,  
맥북 환경에서 개발하여 윈도우 등의 환경과 다소 차이가 있을 수 있습니다!

    OS: Macbook M1
    IDE: VSCode
    Node.js: 18.17.1
    React: 18.2.0
    Gatsby: 5.12.3
    Typescript: 5.2.2

<br />

`npm`과 `yarn` 모두 작성해놓을테니,  
사용하시는 패키지 매니저에 맞게 명령어를 사용해주시면 됩니다.

<br />

# Gatsby 프로젝트 설치하기

1. 터미널을 켜고 블로그 프로젝트를 만들 디렉토리로 이동합니다.

   ```
   cd [경로]
   ```

2. 해당 디렉토리로 이동하셨다면 [gatsby-cli](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
   를 설치해줍니다.

   ```
   npm install -g gatsby-cli
   yarn global add gatsby-cli
   ```

3. gatsby 프로젝트를 `LekoArts/gatsby-starter-minimal-blog` 테마와 함께 설치합니다.

   ```
   // 폴더명 노상관
   gatsby new minimal-blog LekoArts/gatsby-starter-minimal-blog
   // 직접 폴더명을 짓고 싶다면
   gatsby new [프로젝트명] LekoArts/gatsby-starter-minimal-blog
   ```

4. 앞서 설치했던 프로젝트명의 폴더가 해당 디렉토리에 생성됐죠?! 폴더 내부로 이동해줍니다!

   ```
   cd [프로젝트명]
   ```

5. 생성된 Gatsby 프로젝트를 로컬 서버 실행해봅시다.

   ```
   gatsby develop
   yarn develop
   ```

6. `http://localhost:8000/` 에서 정상적으로 띄워진다면 성공!
7. `http://localhost:8000/___graphql` 에서 [GraphQL](https://www.gatsbyjs.com/docs/graphql/) 쿼리로 데이터 작업을 할 수 있는 서버도 같이 띄워집니다.

---

<br />

# Tip

```
gatsby develop
yarn develop
```

명령어 실행시 `.cache` 캐시 폴더가 생성됩니다.  
서버를 끄고 켜기를 계속 반복하실 때, 서버가 build 되다가 멈추거나, 코드 변경사항이 적용되지 않는다면 이 폴더를 `삭제`하고 서버를 켜시면 됩니다!

<br />

### <참고>

[React 기반 Gatsby로 기술 블로그 개발하기](https://www.inflearn.com/course/gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8)  
[Quick Start | Gatsby](https://www.gatsbyjs.com/docs/quick-start/)  
[LekoArts/gatsby-starter-minimal-blog](https://github.com/LekoArts/gatsby-starter-minimal-blog)

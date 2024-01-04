---
emoji: 🐈‍⬛
title: 1. 개발 목차 & 마이그레이션한 이유 & 왜 Gatsby? | 깃허브 블로그 Gatsby 'minimal-blog' 테마로 마이그레이션 하기
date: '2023-11-01'
categories: github-blog-ignore
---

안녕하세요 묘묘링입니다.  
무려 세번째 깃허브 블로그 개발을 마쳤습니다!!

약 5개월 전에 Jekyll로 깃허브 블로그 만들 적 테마 뜯을 때 고생한 걸 그 사이에 까먹었는지  
Jekyll의 Ruby + Liquid + scss 조합의 낯가림의 여파가 가시지 않아 도무지 손이 가지 않더라고요!!

그래서 냅다 뒤집었습니다!  
제 블로그의 분위기가 맘에 들고, 이번에 Gatsby 마이그레이션 또는 처음 깃허브 블로그를 개발하시는 분께 도움이 되었으면 좋겠습니다.  
블로그 마이그레이션 포스트는 아래와 같이 나눠서 작성됩니다.

---

### <목차>

##### [1. 개발 목차 & 마이그레이션한 이유 & 왜 Gatsby?](/github_blog/2023-11-01-Gatsby-migration-1/)

##### [2. Gatsby 프로젝트 설치하기](/github_blog/2023-11-02-Gatsby-migration-2)

##### [3. 'Shadowing'하여 커스텀 준비하기](/github_blog/2023-11-03-Gatsby-migration-3)

##### [4. 메인 컬러 변경하기](/github_blog/2023-11-04-Gatsby-migration-4)

##### [5. 메인 페이지 부제목, 링크 Text 변경하기](/github_blog/2023-11-05-Gatsby-migration-5)

##### [6. 게시글 목록 위치 변경하고 태그 노출, 게시글 내용 미리보기](/github_blog/2023-11-06-Gatsby-migration-6)

##### [7. 날짜 포맷 바꾸기-1](/github_blog/2023-11-07-Gatsby-migration-7)

##### [8. 날짜 포맷 바꾸기-2](/github_blog/2023-11-08-Gatsby-migration-8)

##### [9. 블로그 정보 교체하기](/github_blog/2023-11-09-Gatsby-migration-9)

##### [10. 게시글 상세페이지 타이틀 구성 변경, 하이라이트 변경하기](/github_blog/2023-11-10-Gatsby-migration-10)

##### [11. 코드 블럭 폰트 사이즈 변경하기](/github_blog/2023-11-11-Gatsby-migration-11)

##### [12. 웹 폰트 적용하기](/github_blog/2023-11-12-Gatsby-migration-12)

##### [13. sitemap, rss, robots 적용하기](/github_blog/2023-11-13-Gatsby-migration-13)

##### [14. Giscus 댓글 기능 추가하기](/github_blog/2023-11-14-Gatsby-migration-14)

##### [15. Netlify로 배포하기](/github_blog/2023-11-15-Gatsby-migration-15)

##### [16. Google, 네이버 웹 마스터, Bing 웹 마스터, Daum 검색 등록하기](/github_blog/2023-11-16-Gatsby-migration-16)

---

<br />

# 1. 마이그레이션한 이유

1. 위에서 언급했지만 <u>Jekyll의 Ruby + Liquid + scss 조합</u>을 다루기에 벅찼습니다 (세 언어 다 사용 안 함)
2. Gatsby로 만들어진 블로그가 <u>많이 보이기 시작</u>했습니다.
3. 그중 [bepyan님 블로그](https://bepyan.github.io/blog) 를 보고 `디자인` 에 눈이 멀어서 갈아엎을 결심을 했습니다. (근데 이 블로그는 Next.js;)
4. 깔끔한 UI + Gatsby 조합으로 뒤집자! 이렇게 결심이 섰습니다.

<br />

# 2. 왜 Gatsby?

### [Gatsby](https://www.gatsbyjs.com/)

<u>[React](https://react.dev/) 기반</u> JAM Stack를 활용한 정적 사이트 생성기 입니다.

### [JAM Stack](https://www.cloudflare.com/ko-kr/learning/performance/what-is-jamstack/) (Javascript API MarkUp Stack)

쉽게 규모있는 웹을 만들기 위해 디자인된 아키텍처이며 더 빠르고, 안전합니다.

### [GraphQL](https://graphql.org/)

페이스북에서 개발한 쿼리 언어로 단일 엔드 포인트에서 원하는 데이터만을 받을 수 있다. Gatsby에서는 데이터 조회를 위한 Query만 사용됩니다.

렌더링 할 화면들을 모두 [Pre-Render](https://jeonghwan-kim.github.io/dev/2020/08/21/gatsby-prefetch.html)하여 미리 빌드 된 파일을 [CDN](https://ko.wikipedia.org/wiki/%EC%BD%98%ED%85%90%EC%B8%A0_%EC%A0%84%EC%86%A1_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC)을 통해 제공하고,  
선택의 가장 큰 요인은 저의 주 개발 언어인 `JavaScript (TypeScript) + React 환경`으로 구축을 할 수 있기 때문이었습니다.  
배운지 얼마 안 된 타입 스크립트를 적용해 볼 기회였답니다!

<br />

다음 포스트부터 개발 과정을 차례대로 작성하겠습니다.

<br />

### <참고>

[React 기반 Gatsby로 기술 블로그 개발하기](https://www.inflearn.com/course/gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8)  
[Quick Start | Gatsby](https://www.gatsbyjs.com/docs/quick-start/)

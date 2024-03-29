---
emoji: 🐈‍⬛
title: 13. sitemap, rss, robots 적용하기 | 깃허브 블로그 Gatsby 'minimal-blog' 테마로 마이그레이션 하기
date: '2023-11-13'
categories: github-blog
---

sitemap, robots, rss, 를 적용해 보겠습니다.  
이 작업은 [SEO(Search Engine Optimization)](https://yozm.wishket.com/magazine/detail/1540/)라 불리는 검색 최적화에 해당되며 블로그가 검색 서비스에 노출되게 하기 위한 작업입니다!

검색 엔진이 웹사이트를 수집하고 색인화하는 과정을 크롤링(crawling)이라고 하는데, [크롤러](https://ko.wikipedia.org/wiki/%EC%9B%B9_%ED%81%AC%EB%A1%A4%EB%9F%AC)에게 내 블로그를 알려주는 역할을 하는 것이 `robots.txt`와 `sitemap.xml` 입니다.

<br />

# rss

[RSS (Rich Site Summary)](https://ko.wikipedia.org/wiki/RSS)란 웹 페이지의 콘텐츠를 표준 XML로 만들어 콘텐츠를 구독할 수 있게 합니다.  
이 테마에는 그것을 생성해 주는 <u>이미 _gatsby-plugin-feed_ 가 설치되어 있습니다!</u> 만약 설치가 되어있지 않다면,  
[Adding an RSS Feed](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-an-rss-feed/)을 참조하여 설치해 주세요.  
설치 후 `gatsby-config.js` 파일의 `plugins: []` 플러그인 배열 안에 `gatsby-plugin-feed`를 추가해 주시면 됩니다.  
그 외 옵션들에 쿼리를 추가하여 설정해 줄 수 있는데, 이 테마에는 기본으로 작성되어 있는 설정이 있어 그대로 두었습니다.

<br />

```
npm install gatsby-plugin-feed
yarn add gatsby-plugin-feed

```

<br />

# sitemap.xml

sitemap.xml은 웹사이트의 구조를 검색 엔진에게 알려주는 역할을 합니다.  
Gatsby에서는 [gatsby-plugin-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/) 또는 [gatsby-plugin-advanced-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-advanced-sitemap/) 둘 중 하나를 선택하여 설치해주면 자동으로 생성해줍니다.  
이 테마에는 <u>이미 sitemap이 설치</u>되어 있는데요! 혹시라도 없으신 분들은 아래 명령어로 설치해 주신 후, 위 문서를 참조하여  
`gatsby-config.js` 파일의 `plugins: []` 플러그인 배열안에 `gatsby-plugin-sitemap` 또는 `gatsby-plugin-advanced-sitemap`를 추가해주시면 됩니다.

<br />

```
npm install gatsby-plugin-sitemap
yarn add gatsby-plugin-sitemap

or

npm install gatsby-plugin-advanced-sitemap
yarn add gatsby-plugin-advanced-sitemap


```

<br />

그 다음 build 명령어를 실행한 후, `public 폴더` 안에 `sitemap.xml` 과 같은 파일이 생긴 것을 볼 수 있습니다.  
저는 `sitemap-index.xml`파일과 `sitemap-0.xml` 파일이 생성되어 있었습니다.  
그 후에 서버 실행 후, `나의 url/sitemap.xml` 로 접속하면 확인할 수 있습니다.

<br />

```

gatsby build
yarn build


```

<br />

# robots.txt

`robots.txt` 파일은 검색 엔진 크롤러가 웹사이트를 방문할 때, 어떤 페이지를 수집할 수 있는지 알려주는 역할을 합니다.  
 robots.txt 파일은 <u>루트 디렉토리에 위치</u>해야 하고 robots.txt 파일이 없으면 모든 페이지를 수집한다고 합니다.  
 gatsby-plugin-robots-txt을 설치하여 Gatsby 프로젝트에 `robots.txt`을 만들어 줍니다.

<br />

```
npm install gatsby-plugin-robots-txt
yarn add gatsby-plugin-robots-txt
```

<br />

마찬가지로 `gatsby-config.js` 파일의 `plugins: []` 플러그인 배열 안에 `gatsby-plugin-robots-txt`를 추가해 주시면 됩니다.  
 그 다음 build 명령어를 실행한 후, `public 폴더` 안에 `robots.txt` 과 같은 파일이 생긴 것을 볼 수 있습니다.  
 아래와 같이 옵션을 작성하면 됩니다.

```ts title="gatsby-config.js"

...

		{
			resolve: `gatsby-plugin-robots-txt`,
			options: {
				host: `https://myomyoring.netlify.app/`, // url과
				sitemap: `https://myomyoring.netlify.app/sitemap-index.xml`, // sitemap명을 작성해주시면 됩니다!
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},

...

```

<br />

### \<참고>

[Adding an RSS Feed](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-an-rss-feed/)  
[gatsby-plugin-robots-txt](https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/)
[RSS 피드 추가하기](https://heyjihye.com/blog/gatsby-rss/)  
[Gatsby 블로그 SEO 설정하기 1 - sitemap.xml, robots.txt](https://chamdom.blog/gatsby-blog-seo-1/)  
[jekyll to Gatsby 블로그👩‍🔧](https://juneyr.dev/jekyll-to-gatsby-%EB%B8%94%EB%A1%9C%EA%B7%B8-%F0%9F%91%A9%E2%80%8D%F0%9F%94%A7)

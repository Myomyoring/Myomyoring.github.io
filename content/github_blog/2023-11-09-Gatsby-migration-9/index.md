---
emoji: 🐈‍⬛
title: 9. 블로그 정보 교체하기 | 깃허브 블로그 Gatsby 'minimal-blog' 테마로 마이그레이션 하기
date: '2023-11-09'
categories: github-blog-ignore
---

|                            |                           |
| -------------------------- | ------------------------- |
| ![변경 전](./title_bf.png) | ![변경 전](./head_bf.png) |

우선 `블로그의 제목과 소개`를 먼저 바꿔볼 텐데요,  
이러한 설정은 거의 루트 디렉토리에 위치해 있는 `gatsby-config.ts`에서 가능합니다.  
저는 아래와 같이 변경해 줬습니다.

<br />

```ts title="gatsby-config.ts"
...

const config: GatsbyConfig = {
	siteMetadata: {
		siteTitle: `Myolog`, // 블로그 타이틀 제목
		siteTitleAlt: `Myolog | Tech Blog` // 브라우저 타이틀, 주소창 등에 띄워질 Head (Seo),
		siteHeadline: `Myolog | Tech Blog`,
		siteUrl: `https://myomyoring.netlify.app`,
		siteDescription: `프론트엔드 개발자 취준생 기술 블로그`,
		siteImage: `/banner.jpg`,
		siteLanguage: `ko`,
		author: `@Myomyoring`,
	}
}

...

```

|                            |                           |
| -------------------------- | ------------------------- |
| ![변경 후](./title_at.png) | ![변경 후](./head_at.png) |

---

![변경 전](./externalLink_bf.png)

다음은 `externalLinks` 를 변경해보겠습니다. 마찬가지로 `gatsby-config.ts`에서 변경합니다.

<br />

```ts title="gatsby-config.ts" highlight=16-20
...

{
			resolve: `@lekoarts/gatsby-theme-minimal-blog`,
			options: {
				navigation: [
					{
						title: `Blog`,
						slug: `/blog`,
					},
					{
						title: `About`,
						slug: `/about`,
					},
				],
				externalLinks: [ // 이 배열에서 추가, 수정, 제거 해주시면 됩니다
					{
						name: `Github`,
						url: `https://github.com/Myomyoring`,
					},
				],
			},
		},

...

```

![변경 후](./externalLink_at.png)

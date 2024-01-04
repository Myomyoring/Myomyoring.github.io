---
emoji: 🐈‍⬛
title: 5. 메인 페이지 부제목, 링크 Text 변경하기 | 깃허브 블로그 Gatsby 'minimal-blog' 테마로 마이그레이션 하기
date: '2023-11-05'
categories: github-blog-ignore
---

![변경 전](./subTitle_linkName_bf.png)

메인 페이지에 있는 'Latest Posts' 등의 부제목과 'View all tags' 등의 링크 이름을 바꿔보겠습니다.  
`src/@lekoarts/gatsby-theme-minimal-blog/components`의 `homepage.tsx`, `blog.tsx`, `tag.tsx` 파일 변경하고,  
 아래와 같은 방식으로 바꿔줬습니다.

<br />

```tsx title="src/@lekoarts/gatsby-theme-minimal-blog/components/homepage.tsx"
...
<Title text="최근 게시글">
	<Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>모든 글 보기</Link>
</Title>
...
```

![변경 후](./subTitle_linkName_at.png)

<br />

### <참고>

[LekoArts / gatsby-themes](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog)

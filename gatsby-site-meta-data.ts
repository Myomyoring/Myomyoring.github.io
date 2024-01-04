export default {
	title: `Myomyoring Library 📚`,
	description: `어떻게 세상을 바꾸고 기여할지에 대해 늘 고민하는 개발자`,
	language: `ko`,
	siteUrl: `http://localhost:8000/`,
	ogImage: `/og-image.png`, // Path to your in the 'static' folder

	comments: {
		utterances: {
			repo: ``, //`danmin20/danmin-gatsby-blog`,
		},
	},

	author: {
		name: `김묘선`,
		nickname: `묘묘링`,
		stack: ['Frontend', 'React', 'JavaScript'],
		bio: {
			email: `narcissuscat@naver.com`,
			residence: 'Seoul, South Korea',
			// bachelorDegree: '',
		},
		social: {
			github: `https://github.com/Myomyoring`,
			// linkedIn: `http://localhost:8000/`,
			// resume: `http://localhost:8000/`,
		},
		dropdown: {
			StudyBlog: 'https://truebrary.netlify.app/',
		},
	},

	featured: [
		{
			title: 'Github Blog',
			category: 'github-blog',
		},
	],

	timestamps: [
		{
			category: 'Career',
			date: '2022.01.04 - NOW',
			en: 'A Corp.',
			kr: 'A 회사',
			info: 'A 팀',
			link: '',
		},
		{
			category: 'Career',
			date: '2021.01.04 - 2022.01.04',
			en: 'B Corp.',
			kr: 'B 회사',
			info: 'B 팀',
			link: '',
		},
		{
			category: 'Activity',
			date: '2023.07 - NOW',
			en: 'Community',
			kr: '커뮤니티',
			info: 'IT 커뮤니티',
			link: '',
		},
	],

	projects: [
		{
			title: 'Portfolio',
			description: '포트폴리오',
			techStack: ['React', 'JavaScript'],
			thumbnailUrl: '', // Path to your in the 'assets' folder
			links: {
				post: '',
				github: '',
				demo: '',
				googlePlay: '',
				appStore: '',
			},
		},
	],
};

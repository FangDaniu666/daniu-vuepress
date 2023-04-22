module.exports = [
    {
        text: '本站指南', link: '/guide/', icon: 'reco-eye'
    },
    {
        text: '技术分享', link: '/技术文章/', icon: 'reco-api',
        items: [
            {
				text: 'Java',
				items: [
					// {text: 'JavaSE', link: '/技术文章/java/javase'},
					// {text: 'JavaEE', link: '/技术文章/java高级/javaee'},
					{text: '设计模式', link: '/技术文章/设计模式/0.designpatterns'},


				]
			},
            /*{
				text: '前端',
				items: [
					{text: '前端基础', link: '/技术文章/vue/vue01'},
                    {text: '前端框架', link: '/技术文章/vue/vue01'},

				]
			},*/
        ]
    },
    {
        text: '生活分享', link: '/生活分享/', icon: 'reco-faq',
        items: [
			{text: '生活分享', link: '/生活分享/life'},
        ]
    },
    {
        text: '博客', icon: 'reco-blog',
        items: [
			{text: 'B站', link: 'https://space.bilibili.com/455030418', icon: 'reco-bilibili'},
            {text: 'Github', link: 'https://github.com/FangDaniu666/daniu-vuepress', icon: 'reco-blog'},
        ]
    },/**/
	{ text: '时间轴', link: '/timeline/', icon: 'reco-date' }
]
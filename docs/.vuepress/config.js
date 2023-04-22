const themeConfig = require('./config/theme/index.js')
const navConf = require('./config/nav')
const sidebarConf = require('./config/sidebar')
const pluginsConf = require('./config/plugins/index')
module.exports = {
    //注意，此处需要填写你部署在nginx下的文件夹名称，如果是根目录，那么可以注释掉此行，注释掉后本地打开index.html无法访问
    //base: "/dist/",
    title: "房大牛的小站",
    // description: '记录学习、生活的点滴,分享知识和经验',
    description: '欢迎来到我的小世界，我会用文字记录生活，分享思考',
    dest: './dist',
    port: '8745',
    head: [
        ['link', { rel: 'icon', href: '/img/favicon.ico' }],
		['meta', { name: 'keywords', content: '房大牛的小站,vuepress,自建博客' }],
		['meta', { name: 'description', content: '房大牛的小站,记录学习,生活,分享实用工具' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "房大牛"}],
		["link", { rel: "stylesheet", href: "/css/style.css" }],//显示nav小logo
		// ["script", { charset: "utf-8", src: "/js/custom.js" }],//加载右侧菜单栏图片
        // 百度统计
        /*
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?e312f85a409131e18146064e62b19798";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();
        `],
        */
    ],
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        smoothScroll: true,
        // 博客设置
		/*
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认 “标签”
            }
        },*/
        /*
        valineConfig: {
            // your appId
            appId: 'AwhnPnTxxzGzoHsz',
            // your appKey
            appKey: '0M6f1PazzzalVIukU',
            recordIP:true,
            placeholder:'来都来了，冒个泡再走呗...',
            visitor:true,
        },
        */
        authorAvatar: '/avatar.png',
        // 最后更新时间
        lastUpdated: '2023-04-21',
        // 作者
        author: '房大牛',
        // 项目开始时间
        startYear: '2023',
        nav: navConf,
        sidebar: sidebarConf,
		sidebarDepth: 2,
        // 自动形成侧边导航
		sidebar: 'auto',
        // logo: '/head.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // ICP备案
        /*record: '沪ICP备xxxxx号-6',
        recordLink: 'https://beian.miit.gov.cn/',*/
		// 公网安备备案
        /*cyberSecurityRecord: '沪公网安备 xxxxxxx号',
        cyberSecurityLink: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=xxx05177',*/
		//友链
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: '一款简洁而优雅的 vuepress 博客 & 文档 主题。',
                avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
        ]
    },
    markdown: {
        lineNumbers: true
    },
    plugins: pluginsConf
}
module.exports = {
    'flowchart': {},
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "有新的内容更新",
            buttonText: "刷新"
        }
    },
    "vuepress-plugin-auto-sidebar": {
        // collapsable: true,
        // titleMode: "titlecase",
    },
    "vuepress-plugin-baidu-autopush": {},
    'sitemap': {
        hostname: 'https://fangdaniu666.github.io'
    },
    'copyright': {
        noCopy: true, // 选中的文字将无法被复制
        minLength: 100, // 如果长度超过 100 个字符
    },
    /*'@vuepress/medium-zoom': {
        selector: 'img',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
            margin: 16
        }
    },*/
    "dynamic-title": {
        showIcon: "/img/favicon.ico",
        showText: "(/≧▽≦/)欢迎回来！",
        hideIcon: "/img/favicon.ico",
        hideText: "(●—●)",
        recoverTime: 2000
    },
    '@vuepress/nprogress': {},
    'vuepress-plugin-smooth-scroll': {},
    '@vuepress-reco/vuepress-plugin-rss': {
        site_url: "https://daniu.com", //网站地址
        copyright: "", //版权署名
    },
    'reading-progress': {
        //阅读进度条
    },
    'vuepress-plugin-code-copy': {
        //一键复制代码
    },
    '@vuepress-reco/vuepress-plugin-bgm-player': {
        autoShrink: {
            type: true
        },
        audios: [
            {
                name: "coffee",
                artist: "sea-no",
                url:
                    "https://music.163.com/song/media/outer/url?id=2000739268.mp3",
                cover:
                    "http://p1.music.126.net/sVB5_GgkN1izyOjdNZYmPw==/109951168082167863.jpg",
            },
            {
                name: "88θ68nostalgia (w/sea-no)",
                artist: "sea-no",
                url:
                    "https://music.163.com/song/media/outer/url?id=1947459164.mp3",
                cover:
                    "http://p2.music.126.net/ehDNqFzy7PWDS7zEqo7jvQ==/109951167482601494.jpg",
            },

        ],
    },
    "social-share": //分享插件
        {
            title: '234',
            description: '123',
            sites: ['qzone', 'qq', 'weibo', 'wechat', 'douban'], // 启用的站点
            networks: ['qzone', "qq", "weibo", "wechat", "douban", "email"], //分享类型
            email: "fangdaniu666@gmail.com", //email地址
            wechatQrcodeTitle: '微信扫一扫：分享', // 微信二维码提示文字
        },
}
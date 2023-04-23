<template>
    <div>
        <LinkBox :title="'日常工具'" :titleId="'link-title'" :moreLink="'https://www.example.com'" :links="links"/>
        <LinkBox :title="'AI工具'" :titleId="'link-title'" :moreLink="'https://www.example.com'" :links="ailinks"/>
    </div>
</template>

<script>
import LinkBox from '../components/LinkBox.vue';

export default {
    components: {
        LinkBox,
    },
    data() {
        return {
            links: [
                {
                    title: "PotPlayer",
                    link: "https://potplayer.daum.net/",
                    imgSrc: "https://file.lookroot.cn/2023/04/20230403042828image961.png",
                    desc: "一款功能强大的媒体播放器，可以播放多种格式的音频和视频文件。",
                },
                {
                    title: "IDM",
                    link: "https://www.internetdownloadmanager.com/",
                    imgSrc: "https://toolsdar.com/img/20220708043641352.png",
                    desc: "一款优秀的多线程下载工具",
                },
                {
                    title: "Everything",
                    link: "https://www.voidtools.com/zh-cn/",
                    imgSrc: "https://bizaladdin-image.baidu.com/0/pic/1895271161_216797840_-466681421.jpg",
                    desc: "基于名称快速定位文件和文件夹。",
                },
                {
                    title: "uTools",
                    link: "https://www.u.tools/",
                    imgSrc: "https://img2.baidu.com/it/u=415744863,4049842361&fm=253&fmt=auto&app=138&f=JPEG?w=256&h=256",
                    desc: "一个极简、插件化、跨平台的现代桌面软件。",
                },
                {
                    title: "iconfont",
                    link: "https://www.iconfont.cn/",
                    imgSrc: "https://file.lookroot.cn/2023/04/20230421073454image970.png",
                    desc: "强大且图标内容很丰富的矢量图标库",
                },
                {
                    title: "RadminLAN",
                    link: "https://www.radmin.com/cn/",
                    imgSrc: "https://d4.alternativeto.net/1_a-cGVomtRdoB_cSFqUGvBQ7MjTa47abS6Uc49-7NI/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy9yYWRtaW4tdnBuXzE2MDUwNi5wbmc.png",
                    desc: "一种局域网管理软件，可以实现远程控制、文件共享、消息传递等功能。",
                },
                {
                    title: "爱奇艺万能联播",
                    link: "http://static-s.iqiyi.com/wnbf/get.html",
                    imgSrc: "https://t8.baidu.com/it/u=310479431,3089884099&fm=74&app=80&size=f256,256&n=0&f=PNG?sec=1682355600&t=f8c749dc2b54dc8d86bad4bd593c5c7a",
                    desc: "百度网盘高速下载",
                },
                {
                    title: "Bandizip",
                    link: "http://www.bandisoft.com/",
                    imgSrc: "https://img-download.pchpic.net/download/1k1/ec/2s/oluwi2-1soj.png",
                    desc: "一个强大的多功能压缩文件管理工具",
                },
            ],
            ailinks: [
                {
                    title: "ChatGPT",
                    link: "https://chat.openai.com/",
                    imgSrc: "https://api.iowen.cn/favicon/chat.openai.com.png",
                    desc: "OpenAI研发的对话式大型语言模型ChatGPT。",
                },
                {
                    title: "New Bing",
                    link: "https://www.bing.com/new",
                    imgSrc: "https://toolsdar.com/img/1680236640-Pasted.png",
                    desc: "微软推出的一款基于GPT4模型的智能搜索引擎。",
                },
                {
                    title: "通义千问",
                    link: "https://tongyi.aliyun.com/?ref=toolsdar.com",
                    imgSrc: "https://api.iowen.cn/favicon/tongyi.aliyun.com.png",
                    desc: "阿里云推出的一个超大规模的语言模型。",
                },
                {
                    title: "Copilot",
                    link: "https://github.com/features/copilot",
                    imgSrc: "https://file.lookroot.cn/2023/03/20230306054646image811.png",
                    desc: "Copilot是由OpenAI开发的一种人工智能代码生成工具，它通过训练大量的开源代码库和自然语言处理技术来生成高质量的代码片段。",
                },
                {
                    title: "Google Bard",
                    link: "https://bard.google.com/",
                    imgSrc: "https://toolsdar.com/img/1680228896-Pasted.png",
                    desc: "谷歌在一个大型语言模型基础上，推出的聊天机器人。",
                },
                {
                    title: "文心一言",
                    link: "https://yiyan.baidu.com/",
                    imgSrc: "https://nlp-eb.cdn.bcebos.com/logo/favicon.ico",
                    desc: "百度全新一代知识增强大语言模型，能够与人对话互动，回答问题，协助创作，高效便捷地帮助人们获取信息、知识和灵感。",
                },
            ],
        };
    },
};
</script>
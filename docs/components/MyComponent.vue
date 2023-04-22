<template>
    <div>
        <LinkBox :title="'前端框架'" :titleId="'link-title'" :moreLink="'https://www.example.com'" :links="links"/>
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
                    title: "Vue.js",
                    link: "https://vuejs.org/",
                    imgSrc: "https://vuejs.org/images/logo.png",
                    desc: "The Progressive JavaScript Framework",
                },
                {
                    title: "React",
                    link: "https://reactjs.org/",
                    imgSrc: "https://reactjs.org/logo-og.png",
                    desc: "A JavaScript library for building user interfaces",
                },
                {
                    title: "Angular",
                    link: "https://angular.io/",
                    imgSrc: "https://angular.io/assets/images/logos/angular/angular.svg",
                    desc: "One framework. Mobile & desktop.",
                },
            ],
        };
    },
};
</script>
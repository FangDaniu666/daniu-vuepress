<template>
    <div class="link-box mg-b link-box-0 box b2-radius">
        <div class="link-title">
            <div class="link-title-left">
                <h2 :id="titleId" class="cat-box b2-radius">{{ title }}</h2>
            </div>
            <div class="link-more">
                <a :href="moreLink" target="_blank" class="cat-box b2-radius">
                    <span>更多</span>
                    <i class="b2font b2-arrow-right-s-line"></i>
                </a>
            </div>
        </div>
        <div class="link-list">
            <ul>
                <li v-for="(item, index) in links" :key="index">
                    <div class="link-in box b2-radius b2flex">
<!--                        <a :href="item.link" target="_blank" class="link-block" ref="nofollow"></a>-->
                        <img :src="item.imgSrc" class="link-img b2-radius"/>
                        <div class="link-info">
                            <div class="link-top">
                                <a :href="item.link" target="_blank" class="fd link-right" ref="nofollow">
                                    <h2>{{ item.title }}</h2>
                                </a>
                            </div>
                            <p class="link-desc">{{ item.desc }}</p>
                            <div class="link-footer"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
        titleId: {
            type: String,
            default: "",
        },
        moreLink: {
            type: String,
            default: "",
        },
        links: {
            type: Array,
            default: () => [],
        },
    },
};
</script>


<style scoped>
.link-box {
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.link-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 50px;
    background-color: #f5f5f5;
}

.link-title-left {
    display: flex;
    align-items: center;
}

.link-title-left h2 {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin: 0;
    padding: 0;
}

.link-more a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    color: #666;
    text-decoration: none;
    transition: color 0.3s ease;
}

.link-more a:hover {
    color: #333;
}

.link-more a span {
    margin-right: 5px;
}

.link-more a i {
    font-size: 14px;
    color: #666;
    margin-left: 5px;
}

.link-list {
    padding: 20px;
}

.link-list ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    padding: 0;
}

.link-list li {
    width: 48%;
    margin-bottom: 10px;
}

.link-in {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px;
    height: 100%;
}

.link-block {
    flex: 1;
    height: 100%;
    position: relative;
}

.link-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
}

.link-info {
    flex: 1;
}

.link-top {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.link-right {
    flex: 1;
    text-align: right;
}

.link-right h2 {
    font-size: 16px;
    color: #333;
    margin: 0;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.link-desc {
    font-size: 14px;
    color: #666;
    margin: 0;
    padding: 0;
    line-height: 1.5;
}

.link-footer {
    height: 20px;
}

.b2-radius {
    border-radius: 4px;
}

.b2flex {
    display: flex;
}

.fd {
    flex-direction: column;
}

.mg-b {
    margin-bottom: 20px;
}

.box {
    box-sizing: border-box;
}

.b2font {
    font-family: "b2icon";
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    font-size: 16px;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.b2-arrow-right-s-line:before {
    content: "\e6b6";
}
</style>
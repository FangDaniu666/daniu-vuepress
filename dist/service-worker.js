/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1c1d0826a100fff5178292dc34e415af"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.ac327604.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.864032d8.js",
    "revision": "14ddcdf8988854ee32c3243d6156a982"
  },
  {
    "url": "assets/js/11.21fb550f.js",
    "revision": "080d1e1a934ded70c1a37a9dbdec7eb3"
  },
  {
    "url": "assets/js/12.e8d347d7.js",
    "revision": "4677c372b05e570589dd0ff49a4f9013"
  },
  {
    "url": "assets/js/13.7ca6337a.js",
    "revision": "407beab733af7a79e7e06d9f9605f986"
  },
  {
    "url": "assets/js/14.d152cb42.js",
    "revision": "9d49365baf82f4a20a751e63b41cc9ec"
  },
  {
    "url": "assets/js/15.f0c93ac2.js",
    "revision": "53aa241c263ce7b825788257a013045c"
  },
  {
    "url": "assets/js/16.6aeb2f7c.js",
    "revision": "01e9f273ad7e89239dc2aaa06e39fae6"
  },
  {
    "url": "assets/js/17.2c720c1c.js",
    "revision": "ed71af0d2819f4ab26cf815f89ced3d8"
  },
  {
    "url": "assets/js/18.97161d75.js",
    "revision": "37933b47747a1c349b303d12b255ef8e"
  },
  {
    "url": "assets/js/4.1ef757d0.js",
    "revision": "0cd782a39c2cc04b114883182718ae95"
  },
  {
    "url": "assets/js/5.190b80f5.js",
    "revision": "258c45f563c75a070464fc4de3d84c04"
  },
  {
    "url": "assets/js/6.9da0541f.js",
    "revision": "8873a48f1cde6e64b974552614de3380"
  },
  {
    "url": "assets/js/7.c59d9949.js",
    "revision": "df552cd6564b0f9a5969529f6d5fe445"
  },
  {
    "url": "assets/js/8.d8b87a3c.js",
    "revision": "4bd6723c068a61f753459deb3c2c39ed"
  },
  {
    "url": "assets/js/9.4baef992.js",
    "revision": "4f1788b56f47c6b80450b59d1aaf74d3"
  },
  {
    "url": "assets/js/app.26524778.js",
    "revision": "90d8131cf33ce11a02e34dae13b4d085"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.af4d3f11.js",
    "revision": "edca85aa74e4c030cffb56b25b077d94"
  },
  {
    "url": "avatar.png",
    "revision": "8edcc83b35850ec2c34884a313960c46"
  },
  {
    "url": "categories/index.html",
    "revision": "a4fbb7a544c2e42957dbbacd4a86e041"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b7db1612075122f81c665f30c62b60e4"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "6a0ebfbe421f38d07b9a33467dd74b70"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "2c0c1e634e97a5122adcaa77e29e49ec"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "405cc4e7f93991a65d1bda14f7a2be2f"
  },
  {
    "url": "img/6.jpg",
    "revision": "e32be773e38b5a6488218f4eaea3b865"
  },
  {
    "url": "img/logo.png",
    "revision": "dd1efc6c581d1bc0cc84ff5ca99e0a3a"
  },
  {
    "url": "index.html",
    "revision": "7d00518a5c4f6fa24ed68f7515d7d622"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "c9da3060a4fb5e63c9804b7a657a3c04"
  },
  {
    "url": "tags/java/index.html",
    "revision": "e97772f0c72529c62619641940915c81"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "07a59a56cb62883c1b9ab7ec768beb5c"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "07c7b3d227ea45587da5a1dda6aeb22b"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "c269a4a3bd1018eb2f0cc521996ab97e"
  },
  {
    "url": "timeline/index.html",
    "revision": "48eb532df2923125f5b39a11cbaa326b"
  },
  {
    "url": "技术文章/设计模式/0.designpatterns.html",
    "revision": "bd9ca2a9fe1134270191e96d002af68d"
  },
  {
    "url": "技术文章/设计模式/1.Singleton.html",
    "revision": "8f8c27860310996ffda098361f27b454"
  },
  {
    "url": "技术文章/设计模式/2.Factory.html",
    "revision": "a6d5ff60a8e1c1a441bf81616b5a761c"
  },
  {
    "url": "技术文章/设计模式/3.Builder.html",
    "revision": "70d89d57649ae9bdccaf794f70297767"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f6602df810109e2938ccc78bd974eda7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

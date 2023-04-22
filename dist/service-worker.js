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
    "revision": "213c4a1d1147212a6d271260a57d67c2"
  },
  {
    "url": "assets/css/0.styles.6092f2f5.css",
    "revision": "f9ffd398fabe55c9a582a2d1d559d9e8"
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
    "url": "assets/js/1.0875c445.js",
    "revision": "4fc3dcb2d21cd3764290e59a0382c6c0"
  },
  {
    "url": "assets/js/10.ab0e6332.js",
    "revision": "5725a829c25fa74ffa95443d4f760082"
  },
  {
    "url": "assets/js/11.3b2b7367.js",
    "revision": "4624b390edb9843d3a947c08c17b1f89"
  },
  {
    "url": "assets/js/12.0d08ccc1.js",
    "revision": "25d460f6520a03f52e60ca886d8528e2"
  },
  {
    "url": "assets/js/13.b019764e.js",
    "revision": "be45afbd74661115734c3df80f9e45eb"
  },
  {
    "url": "assets/js/14.25d47190.js",
    "revision": "1471b03ca95dfb3efac010d1b1e81218"
  },
  {
    "url": "assets/js/15.cbfdb6e5.js",
    "revision": "0b3bb379bf03a9a2853a5adcc9bcc23d"
  },
  {
    "url": "assets/js/16.e5f63484.js",
    "revision": "16b9adb3e6cb42bf935a3feaf122dee5"
  },
  {
    "url": "assets/js/17.a62c26ef.js",
    "revision": "75e52dfa19f4428c9784e0386f55ab82"
  },
  {
    "url": "assets/js/18.9e692df3.js",
    "revision": "473c3832aa4d91e81b9aa9294b311ba5"
  },
  {
    "url": "assets/js/19.d3be0373.js",
    "revision": "4166709af3c9fc33fcfcd1018ec1d4e5"
  },
  {
    "url": "assets/js/20.3de32307.js",
    "revision": "1b5c020ee530e79ce37fc159a6a23439"
  },
  {
    "url": "assets/js/21.28b03216.js",
    "revision": "3d1b8e2b96e8ff6a9195a374fe0465ac"
  },
  {
    "url": "assets/js/22.ce136ec2.js",
    "revision": "2feb02ca9d379bc1c11223b2d01c462a"
  },
  {
    "url": "assets/js/23.33d32f48.js",
    "revision": "5c42d7800055aab7a539226097318633"
  },
  {
    "url": "assets/js/4.bccf22db.js",
    "revision": "68a8031f6cc98ca6d40de8e37cb308cb"
  },
  {
    "url": "assets/js/5.bfe7b2e7.js",
    "revision": "674b7dcf1b90050766565c9d8485aa26"
  },
  {
    "url": "assets/js/6.b91397fb.js",
    "revision": "de8466b12d72404b1a47c8a925201a2b"
  },
  {
    "url": "assets/js/7.0b12647d.js",
    "revision": "b8a0c7101fd95959c0c6c7a9a7ea5d99"
  },
  {
    "url": "assets/js/8.63177188.js",
    "revision": "ce8796324eace8d72b60a9b1c14c3a81"
  },
  {
    "url": "assets/js/9.00a0037a.js",
    "revision": "a485ae5c83ab4b40545f8ce14c486137"
  },
  {
    "url": "assets/js/app.17b1bdcc.js",
    "revision": "5b171a0ad668ea07cd0158809b69f73d"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.9fe6d4d3.js",
    "revision": "cf42d38915e35de1828dffa9e5da56e5"
  },
  {
    "url": "avatar.png",
    "revision": "8edcc83b35850ec2c34884a313960c46"
  },
  {
    "url": "categories/index.html",
    "revision": "c8a4a0ec7cfed0201773d74878b37688"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f5570ab591270a54227e218bda5f40bf"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "852748f9ae541975f21365e553cbb8e0"
  },
  {
    "url": "components/Frontendframe.html",
    "revision": "90223ed042efe34dd01d4d84c684c7bd"
  },
  {
    "url": "components/LinkBox.html",
    "revision": "62ce23f44439262f9282fb65225bd6c9"
  },
  {
    "url": "components/MyComponent.html",
    "revision": "18eb6e4abfe5f6fc484a1a1a22a9c505"
  },
  {
    "url": "components/Tools.html",
    "revision": "2690944d935ce138d8855af30beb36c6"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "2239904495e1315418ff003c24a60444"
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
    "revision": "4849f6898924307158b0fd7094b1a76d"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "980ca6f0f7c929a0b0bcd5dfd9c69f9f"
  },
  {
    "url": "tags/java/index.html",
    "revision": "7dff2b443b95413d6737f28c9c6d1422"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "202fb0ef9bea4b45971d69153f7f26e0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "751711424fc51863f82de80cd1c4a4dd"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "ed64df1bea0a63dfa031f9900d59bfa2"
  },
  {
    "url": "timeline/index.html",
    "revision": "4327f881afb94a48940a6ebe41b9425a"
  },
  {
    "url": "tools/index.html",
    "revision": "2b2994110ca54ebaede132a72651860b"
  },
  {
    "url": "技术文章/设计模式/0.designpatterns.html",
    "revision": "d2d25591860b2e7505ab7d5e3e7d6712"
  },
  {
    "url": "技术文章/设计模式/1.Singleton.html",
    "revision": "1fc35187ede6ab9833b826e40b3be30e"
  },
  {
    "url": "技术文章/设计模式/2.Factory.html",
    "revision": "27a9dfa2566097b1450bab7289ed5c8d"
  },
  {
    "url": "技术文章/设计模式/3.Builder.html",
    "revision": "7ce365a2de32a2c22a9182d438a65556"
  },
  {
    "url": "生活分享/life.html",
    "revision": "eea88f514bdc038af4fa1fcfe0cc12b8"
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

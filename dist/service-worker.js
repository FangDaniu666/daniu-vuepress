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
    "revision": "0f951a86388c33c1fde0dcc3d2ab02c6"
  },
  {
    "url": "assets/css/0.styles.80a9d22e.css",
    "revision": "251908a71649765bf2f02dddd0c826a7"
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
    "url": "assets/js/11.43ab553a.js",
    "revision": "623905b75ea304e2d43c132913d2d2b8"
  },
  {
    "url": "assets/js/12.49f6125a.js",
    "revision": "d0e5ceda3d475d707428ecde21b2c438"
  },
  {
    "url": "assets/js/13.8b86cad1.js",
    "revision": "cbf4f3c0c1ded7d5059f8249f4443dab"
  },
  {
    "url": "assets/js/14.9a85b1e0.js",
    "revision": "02ae01f67c5ce504265d644849de1802"
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
    "url": "assets/js/18.32cc2707.js",
    "revision": "427f862fa472c3cebc3185f95c3bee3e"
  },
  {
    "url": "assets/js/19.65b69550.js",
    "revision": "d8864626b2fe1d1ff494317c8dc18796"
  },
  {
    "url": "assets/js/20.05b88214.js",
    "revision": "018b58c5a653f1bf95dc422131dee0ce"
  },
  {
    "url": "assets/js/21.28b03216.js",
    "revision": "3d1b8e2b96e8ff6a9195a374fe0465ac"
  },
  {
    "url": "assets/js/22.fbe72e65.js",
    "revision": "aa74f2b62e93a5ce4391b0521781c218"
  },
  {
    "url": "assets/js/23.35734d9e.js",
    "revision": "41d37d7640f67b099fa8fa5eacfd2425"
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
    "url": "assets/js/8.11ee62d3.js",
    "revision": "238ae75a14f70e6d169d566fb5e62260"
  },
  {
    "url": "assets/js/9.00a0037a.js",
    "revision": "a485ae5c83ab4b40545f8ce14c486137"
  },
  {
    "url": "assets/js/app.06b929fb.js",
    "revision": "7914b5ee7fa158ca3235b9e6d4041a74"
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
    "revision": "f40a0f0beba7546f885bc50481751276"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e599fd15811b7c6c859b18288e257cb3"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e6823355b4b7311139299d782c057890"
  },
  {
    "url": "components/Frontendframe.html",
    "revision": "f31a087153d31b5ed6dc4b37604eafc3"
  },
  {
    "url": "components/LinkBox.html",
    "revision": "721a0df52dea0b366c9c61c70f25239b"
  },
  {
    "url": "components/MyComponent.html",
    "revision": "dd42175d79fcfffb116789f27779b03e"
  },
  {
    "url": "components/Tools.html",
    "revision": "27b49bb1401f8468f97764514eb8cf13"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "90c98bae5e85938dfe2052da78fc769f"
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
    "revision": "5c011b6cd1b0229fea7faf9571020ebf"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "e062c113cbaf3eb4720220cf21a58e0b"
  },
  {
    "url": "tags/java/index.html",
    "revision": "6bb374945b4cbfd4e3b00827214197e7"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8c4b92425390901283041a974d47fbb2"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "95209ff59409a0f5b6a2e81d28afd0a7"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "1251e6a2825542fa3ebbd2a2e4642de1"
  },
  {
    "url": "timeline/index.html",
    "revision": "ce9f7ea7edc0e3b14d3aab541e770f7a"
  },
  {
    "url": "tools/index.html",
    "revision": "960eeac8f51a1ec0e5cc754c2f734bb7"
  },
  {
    "url": "技术文章/设计模式/0.designpatterns.html",
    "revision": "ef0fd13fa607a62bb2b6eeaa886e87d2"
  },
  {
    "url": "技术文章/设计模式/1.Singleton.html",
    "revision": "8d7cdbe034107b6da5e0363e822827e0"
  },
  {
    "url": "技术文章/设计模式/2.Factory.html",
    "revision": "641714b7e7e4ad60fa81d98f1bdb4547"
  },
  {
    "url": "技术文章/设计模式/3.Builder.html",
    "revision": "ef15dc4f5d21b94547a5e896b0a3dc61"
  },
  {
    "url": "生活分享/life.html",
    "revision": "c45a599a05af13cf18cefd04d4804c65"
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

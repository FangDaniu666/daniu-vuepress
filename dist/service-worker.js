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
    "revision": "af43e9389f22951a50396336328a91b5"
  },
  {
    "url": "assets/css/0.styles.842e4c3b.css",
    "revision": "4168d60bb46815f116b65218a1516504"
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
    "url": "assets/js/11.c5315bae.js",
    "revision": "3da27ac168ce5536fcd45bb23e45de2c"
  },
  {
    "url": "assets/js/12.41e8ee26.js",
    "revision": "838cef678ebe1644a1096b52a62397f3"
  },
  {
    "url": "assets/js/13.0c5ddfa9.js",
    "revision": "93f0576330900a218d42fdbc917286c5"
  },
  {
    "url": "assets/js/14.836c2386.js",
    "revision": "65daf86a615d9927ca72a8dddb93deb5"
  },
  {
    "url": "assets/js/15.cbfdb6e5.js",
    "revision": "0b3bb379bf03a9a2853a5adcc9bcc23d"
  },
  {
    "url": "assets/js/16.65044b91.js",
    "revision": "b87ed4afd5fe76ddade5b97009ca73f1"
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
    "url": "assets/js/21.4f49ec0a.js",
    "revision": "c90a70134c222585adb86b8b1c884ace"
  },
  {
    "url": "assets/js/22.5c35cf13.js",
    "revision": "97e27c7fc8c6666116b10a8f37820881"
  },
  {
    "url": "assets/js/23.5658c7c0.js",
    "revision": "45d731e6670de8382a1d818546444d4c"
  },
  {
    "url": "assets/js/24.5a26090e.js",
    "revision": "2b73947d8f7ce319a79af7c15e8240cb"
  },
  {
    "url": "assets/js/25.52e1cae5.js",
    "revision": "61edf57d01d72aafc26f341e0541a18f"
  },
  {
    "url": "assets/js/26.8812686a.js",
    "revision": "2e0311dc06cd8ee6f4db9e5d176c289d"
  },
  {
    "url": "assets/js/27.30f04354.js",
    "revision": "da104479dd36d4ca51bb5e9fb22bd8f8"
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
    "url": "assets/js/8.39b687ab.js",
    "revision": "570bc5f6f0bd387040dd34cf264f112a"
  },
  {
    "url": "assets/js/9.00a0037a.js",
    "revision": "a485ae5c83ab4b40545f8ce14c486137"
  },
  {
    "url": "assets/js/app.450a593d.js",
    "revision": "94ab038aede933609aceb98318909b5b"
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
    "revision": "b28034686e7ecb1a14ad809d10ca9819"
  },
  {
    "url": "categories/java/index.html",
    "revision": "265ee96d0e0c0701c8ae7b45f96f9b48"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "11ee208720ae0ebc11d83177f9e5b032"
  },
  {
    "url": "components/Frontendframe.html",
    "revision": "9d311c548d9424ba8f388ed284f2e769"
  },
  {
    "url": "components/LinkBox.html",
    "revision": "833e627d81d85693e6c527d915ce704a"
  },
  {
    "url": "components/MyComponent.html",
    "revision": "b18b9e52dc2966cafef899231016f13b"
  },
  {
    "url": "components/Tools.html",
    "revision": "711736050a198ad9c0ff2c24d8199699"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "33373271c46463265286ec97c134cc33"
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
    "revision": "76010f85b520b2f75f391617cbc54ad2"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "bad9d7fcf6476ebbef32b7a3fc299b6a"
  },
  {
    "url": "tags/java/index.html",
    "revision": "362c2e59898047fb6f2b006b1a74abc9"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "4c1e2c96503cbde694b42694aa736fb7"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "986688cf4b244df91c21d7442ec93f31"
  },
  {
    "url": "tags/设计模式/index.html",
    "revision": "a95530303061db9d19761e7bbf05612d"
  },
  {
    "url": "timeline/index.html",
    "revision": "b5543b64fe4089ef6a389ba6fa68fc67"
  },
  {
    "url": "tools/index.html",
    "revision": "719727cc6408cac2016f4a9963250a29"
  },
  {
    "url": "技术文章/设计模式/0.designpatterns.html",
    "revision": "355259da5c0723ea6c6d87ad9c1d0de6"
  },
  {
    "url": "技术文章/设计模式/1.Singleton.html",
    "revision": "c2b6e4f93fbf8d2f0537871154a9e970"
  },
  {
    "url": "技术文章/设计模式/2.Factory.html",
    "revision": "23f82c2a9e02d8eebf63cf973eaba209"
  },
  {
    "url": "技术文章/设计模式/3.Builder.html",
    "revision": "6808fef9990a6603484b6e77ea20c361"
  },
  {
    "url": "技术文章/设计模式/4.Prototype.html",
    "revision": "df9d7206fa9e5225be2f33dacb339aa5"
  },
  {
    "url": "技术文章/设计模式/5.Adapter.html",
    "revision": "f19db5e3851ccbe412d68239791d0429"
  },
  {
    "url": "技术文章/设计模式/6.Bridging.html",
    "revision": "78a1a9691b39e6549c498baf50ba63e1"
  },
  {
    "url": "技术文章/设计模式/7.Facade.html",
    "revision": "83172ad8177321f80cea81a2b00f1538"
  },
  {
    "url": "生活分享/life.html",
    "revision": "1a6aef627cd9fe6e4d766dafa8c023bd"
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

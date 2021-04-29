'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5dc7eced1db627a92318833ae3b324f9",
"assets/assets/audio/alphabet/a.mp3": "19908c5971f7b2533c93c6fe0b199b15",
"assets/assets/audio/alphabet/b.mp3": "2acb16074c0a1db06d12544680a1f536",
"assets/assets/audio/alphabet/ch.mp3": "5cbe7870ec436145698129ec975ddcc8",
"assets/assets/audio/alphabet/d.mp3": "1458792b8214e67b1f86e67b84cc75c2",
"assets/assets/audio/alphabet/ei.mp3": "f3e50f584aef19cd82b1e67dcbabb0f3",
"assets/assets/audio/alphabet/f.mp3": "100d57c43aba967f3bda6f3d85aec0de",
"assets/assets/audio/alphabet/g.mp3": "bd3d8fcb16e1287ca0984c7644fb3c7a",
"assets/assets/audio/alphabet/h.mp3": "d765a85c09a029f9d9d8198027f746ab",
"assets/assets/audio/alphabet/i.mp3": "c8c494d51766775558888a4707fa5ae3",
"assets/assets/audio/alphabet/j.mp3": "ee196fca53c0bd8f14e89bbce78d09b8",
"assets/assets/audio/alphabet/k.mp3": "078184e446285048f6eb0e92aea7f230",
"assets/assets/audio/alphabet/l.mp3": "7fdb1cd05376dc454d3b819d81eefc6a",
"assets/assets/audio/alphabet/m.mp3": "c198668758159b24595da99b6442ca12",
"assets/assets/audio/alphabet/n.mp3": "ce2ece20d35b3b99f22a719562657014",
"assets/assets/audio/alphabet/o.mp3": "c5a82b3e100b63a27fc3f794bd1b733c",
"assets/assets/audio/alphabet/p.mp3": "97f7f5a1b5d3799b6c95e5a6efd15e9b",
"assets/assets/audio/alphabet/qu.mp3": "a17247fe69bcb7042f1b27ad2d443f4e",
"assets/assets/audio/alphabet/r.mp3": "e8440b253a18e17ca054c1e9f79d2900",
"assets/assets/audio/alphabet/s.mp3": "002ae3062fd5ee23ebf14646677b094f",
"assets/assets/audio/alphabet/t.mp3": "6e9238b2cde024f1f5d06bcca3a344d5",
"assets/assets/audio/alphabet/u.mp3": "3e70f7ab4e6a0720c3bce17df41985d3",
"assets/assets/audio/alphabet/v.mp3": "16efd2fa627a2b356d7b06baa022ba84",
"assets/assets/audio/alphabet/w.mp3": "39f6ecaa5daed008f1698815d99ad836",
"assets/assets/audio/alphabet/x.mp3": "03941a703985584ca895ec9992c08504",
"assets/assets/audio/alphabet/y.mp3": "2d35554da4f76d10c316672a46fd8137",
"assets/assets/audio/alphabet/z.mp3": "62fd91ab115880cb7854d2740ade01c0",
"assets/assets/audio/animals/affe.mp3": "d7a194cc32620f2679f514faa61af18b",
"assets/assets/audio/animals/baer.mp3": "cfa08c9b42f24d632537be6d6b382983",
"assets/assets/audio/animals/chamaeleon.mp3": "5b551d7c3dac18181edf9c3640ce0c36",
"assets/assets/audio/animals/dachs.mp3": "c9d15563dd194005bc560e2bb284b9c6",
"assets/assets/audio/animals/eichhoernchen.mp3": "3b39f66f459cf4672ccd7230137fe4b4",
"assets/assets/audio/animals/fuchs.mp3": "52086032b8f1994b654d9a335e04a135",
"assets/assets/audio/animals/gans.mp3": "7e2bc20bcf7364165b7bdc58375a8d34",
"assets/assets/audio/animals/huhn.mp3": "880052e0ba981da6d3d5c93bef391d7c",
"assets/assets/audio/animals/igel.mp3": "9e2dd971c18254cdea6021d4b29dd779",
"assets/assets/audio/animals/Jaguar.mp3": "9a86577419e9fdc2da205c6363a07bc3",
"assets/assets/audio/animals/Katze.mp3": "5cadd4af0c7f3f8c85e8eb2ad07fc76e",
"assets/assets/audio/animals/luchs.mp3": "b041c1be0812f50b590ca2749155279b",
"assets/assets/audio/animals/marder.mp3": "819309f5cbec79ae4a569fc94d6c150f",
"assets/assets/audio/animals/nasenbaer.mp3": "0233019728908552e1e6820f2bb87722",
"assets/assets/audio/animals/otter.mp3": "6f8c3811d40bafc05ed3d322d0f9f78d",
"assets/assets/audio/animals/pinguin.mp3": "a106514b5dcf6c10c442d4c54646772f",
"assets/assets/audio/animals/qualle.mp3": "8d6aa39c3957088b2e9ac4398b0eb093",
"assets/assets/audio/animals/rabe.mp3": "bc8b49250c6fab8d9f992f6dd5d1fa45",
"assets/assets/audio/animals/seehund.mp3": "d14f72221d7c987f79f296fe5c9178ea",
"assets/assets/audio/animals/taube.mp3": "9a8d9f5597de5fe2bb70e714bcf0b2bf",
"assets/assets/audio/animals/uhu.mp3": "4a3ed15d8ad19725caf2f27f09ceffdd",
"assets/assets/audio/animals/vielfra%25C3%259F.mp3": "1eaa79079b368c070d249b23c19dc24f",
"assets/assets/audio/animals/waschbaer.mp3": "ef61084efd49e3c1181fcf3b98908aed",
"assets/assets/audio/animals/xenosaurus.mp3": "6923b7710a667386d03d19e072d25322",
"assets/assets/audio/animals/yak.mp3": "d8d174e7cac63152cad733125d4ed0ca",
"assets/assets/audio/animals/ziege.mp3": "03224b1606488852ab2cc4d185c3fd59",
"assets/assets/images/animals/Affe.PNG": "751738f95b3fbd6d25d2b074a167a06f",
"assets/assets/images/animals/Baer.PNG": "9b2a441adbe54537665296cda4f949e3",
"assets/assets/images/animals/Chamaeleon.PNG": "f2f0ae79bb851fb376552094c9ef5898",
"assets/assets/images/animals/Dachs.PNG": "73806ac5027802a09e60a27b9eb2f315",
"assets/assets/images/animals/Eichhoernchen.PNG": "bcf52354c17793490cd1928adbc71678",
"assets/assets/images/animals/Fuchs.PNG": "36620d2c9fca01c3f2a42da722c2f0d1",
"assets/assets/images/animals/Gans.PNG": "3146ac1762f4d55c35a44a5b33473564",
"assets/assets/images/animals/Henne.PNG": "3d97263f3db90ad1edaadd570a3ec46c",
"assets/assets/images/animals/Igel.PNG": "2c95740cdb55847648e73511a35fad82",
"assets/assets/images/animals/Jaguar.PNG": "e4132b93b966c63700377811c51035f0",
"assets/assets/images/animals/Katze.PNG": "6cf5150a0d1bb518a78052a55b82a198",
"assets/assets/images/animals/Luchs.PNG": "cad087932635648ad0899aa6322b216f",
"assets/assets/images/animals/Marder.PNG": "ccd8639f54d082e1c91fc9b5f807e372",
"assets/assets/images/animals/Nasenbaer.PNG": "3dec92f3651a9623f6c0bafc15c38630",
"assets/assets/images/animals/Otter.PNG": "3e335cd38c6ace6facdff71af6acbc06",
"assets/assets/images/animals/Pinguin.PNG": "3f0ea6e7c06fd611841c382a7cee1112",
"assets/assets/images/animals/Qualle.PNG": "57dc15284980d2412d32baff2185e007",
"assets/assets/images/animals/Rabe.PNG": "e6977f64840ede329d5604ec3b7f5cba",
"assets/assets/images/animals/Seehund.PNG": "f4ce57ad3036f17e361a85f658c52ad5",
"assets/assets/images/animals/Taube.PNG": "5512591ce7a31de4506fbd0945585471",
"assets/assets/images/animals/Uhu.PNG": "734939fb2504a709c7bf002b43526e6f",
"assets/assets/images/animals/Vielfra%25C3%259F.PNG": "e892115ddcd0a7bf8c09479ed4246a28",
"assets/assets/images/animals/Waschbaer.PNG": "de9c25cefd7e84f825f6c8dac1333c5e",
"assets/assets/images/animals/Xenosaurus.PNG": "8cbac9aa91cf097666ab164d3ef3f241",
"assets/assets/images/animals/Yak.PNG": "e71f746a4218edb5b27ab5984875052d",
"assets/assets/images/animals/Ziege.PNG": "d70d1f5b92e4d1a03be5969f6a8f58a2",
"assets/assets/images/combined/A_Affe.PNG": "0ab6718f2c254dd50d38cb6f31b49693",
"assets/assets/images/combined/B_Baer.PNG": "f022b0affc163f1fa97f01869a7c2fae",
"assets/assets/images/combined/C_Chamaeleon.PNG": "1f2a2950d0501ee877788d25c018f578",
"assets/assets/images/combined/D_Dachs.PNG": "62b45f15b8bb67ede3ad91a693ef00d4",
"assets/assets/images/combined/E_Eichhoernchen.PNG": "f3928900b094ffecbd7ec205429a59cf",
"assets/assets/images/combined/F_Fuchs.PNG": "149776c7b9b36e0af3e054cdf8abcf1f",
"assets/assets/images/combined/G_Gans.PNG": "6d029c4657040c04f5306c13c4da7563",
"assets/assets/images/combined/H_Henne.PNG": "91774b1888f63213a2d58cb814994bd1",
"assets/assets/images/combined/I_Igel.PNG": "6f582671943db52ffe0495a08022e54b",
"assets/assets/images/combined/J_Jaguar.PNG": "c2778b368f803490f8d0a17425272a71",
"assets/assets/images/combined/K_Katze.PNG": "0dd7b1ebc7bc24b2b239281203c3f0cf",
"assets/assets/images/combined/L_Luchs.PNG": "c14806dd9771d8457d88dc56103d8bcf",
"assets/assets/images/combined/M_Marder.PNG": "8ca9227200c7f76c438fe65886107c1c",
"assets/assets/images/combined/N_Nasenbaer.PNG": "6eb2b9b2fc3f187c4d1718b914b08ed7",
"assets/assets/images/combined/O_Otter.PNG": "85718f5249edb9d0e17443cb1abb8e71",
"assets/assets/images/combined/P_Pinguin.PNG": "6462e74e1069d65abe6ecf1c32af4d70",
"assets/assets/images/combined/Q_Qualle.PNG": "7a97706464c6575889061dbb221f2a19",
"assets/assets/images/combined/R_Rabe.PNG": "0e9ed98ab91e2ab92eed6bfd073a0a8e",
"assets/assets/images/combined/S_Seehund.PNG": "347644806e4f6e377fcb178b68d19f89",
"assets/assets/images/combined/T_Taube.PNG": "be31b8a2d0ee7bab5515190cf9d85aad",
"assets/assets/images/combined/U_Uhu.PNG": "5ea6e54b10fdec8ef1fbe7c29d42d51b",
"assets/assets/images/combined/V_Vielfra%25C3%259F.PNG": "aaef0b5f6fc898122ba9f62d18421be5",
"assets/assets/images/combined/W_Waschbaer.PNG": "5fee4fef3bace06beada97839316f277",
"assets/assets/images/combined/X_Xenosaurus.PNG": "2bc816972d231d9000a7ae2799718d91",
"assets/assets/images/combined/Y_Yak.PNG": "3a5f54e14b69d2ea4b273726567d68a2",
"assets/assets/images/combined/Z_Ziege.PNG": "2220483226e23c20bdf20ed55e0b6c2f",
"assets/assets/images/letters/A.PNG": "1af0360acf8d9b4df38291e808aeec42",
"assets/assets/images/letters/B.PNG": "867a8e1a88d0a3bbd39251a071547747",
"assets/assets/images/letters/C.PNG": "ca5b274c56de750e9c822a3394164b59",
"assets/assets/images/letters/D.PNG": "64e0402b12e941e73296f60c7cc858db",
"assets/assets/images/letters/E.PNG": "4d0a9e7a65385e4f8703eacbd564e9e3",
"assets/assets/images/letters/EI.png": "ba5e8ad09c2710a54fe0bf44edfffef5",
"assets/assets/images/letters/F.PNG": "02255d7aa0da7640a6cd59a2a7377afc",
"assets/assets/images/letters/G.PNG": "6a3413eae21cbda41ee79a3dd3e899c4",
"assets/assets/images/letters/H.PNG": "93c30186a68c5e7dfbe0b5f2ca801ce9",
"assets/assets/images/letters/I.PNG": "cc12cbb19e702d43e0a30e08c0f7737e",
"assets/assets/images/letters/J.PNG": "f5646426d936afd837137b06f5f365eb",
"assets/assets/images/letters/K.PNG": "27487608d2ea6fc3a0279c57d2bf9ee5",
"assets/assets/images/letters/L.PNG": "5f47b453e100ae568caee08f5c0df361",
"assets/assets/images/letters/M.PNG": "1397a31edc83254f650b90ab9f378ee7",
"assets/assets/images/letters/N.PNG": "abae73afe85cf5c8066b52e0d314b224",
"assets/assets/images/letters/O.PNG": "2ca2609ef14f66858fd3f5dccdcc20cb",
"assets/assets/images/letters/P.PNG": "f18167bc01dea0b6e50ea026163c1fde",
"assets/assets/images/letters/Q.PNG": "b37dd68d6ed3a4d543084d509b4c9c5d",
"assets/assets/images/letters/R.PNG": "e8bcad6335954db0dc58a0b10166a860",
"assets/assets/images/letters/S.PNG": "4e3517100e54de3a53119ddbc98171ef",
"assets/assets/images/letters/T.PNG": "e0499e56bb062b52bf854116c20b36a0",
"assets/assets/images/letters/U.PNG": "308724b8fbc65fa10f3f6c4b8ebb0b26",
"assets/assets/images/letters/V.PNG": "900a1919a92f9add4f51d67a42e83f20",
"assets/assets/images/letters/W.PNG": "29eaa62094f9cac3603756c9a49e93e1",
"assets/assets/images/letters/X.PNG": "7fd7c637ad670acb6b33cabd446fc03b",
"assets/assets/images/letters/Y.PNG": "ea354e09b8775b1edafde39df997b52d",
"assets/assets/images/letters/Z.PNG": "b4ebb71b2aac2929c5fc4d567139e558",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "d8b7af1748e50b0bdc59a93fc028a2fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b2e732dfd190f0d995b786daed7f17ca",
"/": "b2e732dfd190f0d995b786daed7f17ca",
"main.dart.js": "95cde36291c59dd20cb83c321f67b249",
"manifest.json": "07912ca996ccb4e8b40f7d9ac1362a0b",
"version.json": "5d66a702f8cf8ca7f658ddfca20aaea1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

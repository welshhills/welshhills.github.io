/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/0.738e72fb7c0b7b98ac7d.chunk.js","9fbd868eb3f35fedbb095f6a99868aa5"],["/1.fcd1311a80973d2efa5c.chunk.js","b37cb521e345379f22f349386ac85336"],["/2.6146f0d4025a9f22f78f.chunk.js","04ebef8893a48df974505457bff5685e"],["/200.html","f0e51557f2f0f4eb12571a26bab8cc92"],["/3.96f0bc261aeddcc80bce.chunk.js","c885d5f7ab39582c3a1ed26c264325ce"],["/4.5a229c0e580f1631ed09.chunk.js","ea6d1a94f26b152820949cee641ea4f0"],["/5.a9a5577a4efc79267904.chunk.js","f450088d2234f2e1141788326830a798"],["/6.a8612f7a089d254ad27b.chunk.js","00fd9f5e0eea8970695af2bfc16eb234"],["/7.946056d7a051068cbd61.chunk.js","84cd094de5f3e97d07021ccc299cab39"],["/assets/data.json","43833ddaebbbc8d4682ad28acff2b281"],["/assets/icons/basic_accelerator.svg","58288c2bec441c01d418dc431a51ce4c"],["/assets/icons/basic_alarm.svg","3f04bef56cb01bab91e601037e1d75c0"],["/assets/icons/basic_anchor.svg","6405129f105409c01dc082fad0680517"],["/assets/icons/basic_anticlockwise.svg","a3bbcb761f662df26cfa773c8e0c14a5"],["/assets/icons/basic_archive.svg","00a2cbe9ca69b2ebf2888da5b853b4b2"],["/assets/icons/basic_archive_full.svg","39654a03edf2fc4318b47cd324afce3e"],["/assets/icons/basic_ban.svg","a523fb3fcea0b7e4c76dfd672287903e"],["/assets/icons/basic_battery_charge.svg","bea66e41ed33a4b9d22383411a78f910"],["/assets/icons/basic_battery_empty.svg","dd4f227fcf46fd015b6428751fae9d2a"],["/assets/icons/basic_battery_full.svg","e54fe47e7a8759265252bf74372acbec"],["/assets/icons/basic_battery_half.svg","a6fc954f6d4121e6819a8c9806fcedc5"],["/assets/icons/basic_bolt.svg","7d558d45a80cc4865795bdba69974987"],["/assets/icons/basic_book.svg","d4195974b511c258f29647a31576fac5"],["/assets/icons/basic_book_pen.svg","24b10be986a90724f27db0e7579eccbb"],["/assets/icons/basic_book_pencil.svg","f391e1f11af8c363ac6d7748bedc6a40"],["/assets/icons/basic_bookmark.svg","159e3ebdcdc85c6dd92ddfc21a53a62e"],["/assets/icons/basic_calculator.svg","837b9b3e05b49458acf8ed3c6b698d0d"],["/assets/icons/basic_calendar.svg","32cdb9984a7e94b072845dfdd6b5c162"],["/assets/icons/basic_cards_diamonds.svg","da5497ce18eccb5138329db3dabaf06d"],["/assets/icons/basic_cards_hearts.svg","99f2b90d648220c655b04d56d6e6cf72"],["/assets/icons/basic_case.svg","818e73fb4b47c56bb46a92ecdf345e31"],["/assets/icons/basic_chronometer.svg","798ec110b5adfd391fd7f179bdb72e70"],["/assets/icons/basic_clessidre.svg","c27c6181e5e5128bb961e152898b089e"],["/assets/icons/basic_clock.svg","78943b1e58d6f7771c11a05703e0419b"],["/assets/icons/basic_clockwise.svg","cf2bac9d6440483d10ee32b23a93ea14"],["/assets/icons/basic_cloud.svg","84a33d5ee3195c4c82a3800dffabc592"],["/assets/icons/basic_clubs.svg","b13a69f0ab30ca4c529a5719a614be6f"],["/assets/icons/basic_compass.svg","2133f7ab8848099242b8638bc837f463"],["/assets/icons/basic_cup.svg","1d557e5426293c2ad6f50ece77a49592"],["/assets/icons/basic_diamonds.svg","544e7004f04e05d0dd3002440d1defbd"],["/assets/icons/basic_display.svg","f043e5b5c1d31ce0d7d3e258588af143"],["/assets/icons/basic_download.svg","dabf25f52d3fc8b0f37dde211e63a24b"],["/assets/icons/basic_exclamation.svg","24cb3303a91cc273460cf820a29c4198"],["/assets/icons/basic_eye.svg","0412f0e28d5798cc13f133fe58f5c4cd"],["/assets/icons/basic_eye_closed.svg","e70b780f3414d472a692d4668459b91c"],["/assets/icons/basic_female.svg","1c92753ee8f065ed806013b97c5e3634"],["/assets/icons/basic_flag1.svg","214ab05bf0cd52ccb86bb8509c9a4960"],["/assets/icons/basic_flag2.svg","3bc1dda011539df3f3325e05bc0e1508"],["/assets/icons/basic_floppydisk.svg","0cbb45a1795d8091e908773a67daedf1"],["/assets/icons/basic_folder.svg","44f00ba60ed739cb0232bbc2eef32d6c"],["/assets/icons/basic_folder_multiple.svg","cfc52aa04787771de0e70a558d978e09"],["/assets/icons/basic_gear.svg","4b9eca9d64d3daa0a11a1a779de72b7e"],["/assets/icons/basic_geolocalize-01.svg","ef52c0181f1466cdb4b609201922ca14"],["/assets/icons/basic_geolocalize-05.svg","d4da02c17e6731fce8a821a508b52fda"],["/assets/icons/basic_globe.svg","90c9d85da93eb408b24beedadf4bbfcc"],["/assets/icons/basic_gunsight.svg","8d10be6832bc85b9a61645777fc78480"],["/assets/icons/basic_hammer.svg","26fcd2230c721f280fb3df6df630ade0"],["/assets/icons/basic_headset.svg","602280f23408c5e71032650c06820792"],["/assets/icons/basic_heart.svg","73243f54255eadab2f38d8114dd5425b"],["/assets/icons/basic_heart_broken.svg","e6d1ac0298652b3ecce5ba0476205fdd"],["/assets/icons/basic_helm.svg","3c050f2edb9544ea4969f09a1ac0c64e"],["/assets/icons/basic_home.svg","82d8cd513dfa399c3a64dfccf141dd31"],["/assets/icons/basic_info.svg","88f8b855a3a217323d283eff1ba51c67"],["/assets/icons/basic_ipod.svg","c3b0aafeaf810e5ac3ce3062e7bff2cb"],["/assets/icons/basic_joypad.svg","6e943be0b4a0d8c082676aefc76d110f"],["/assets/icons/basic_key.svg","586b3443f4cb80fbf9322b046b9cdde7"],["/assets/icons/basic_keyboard.svg","41d0524a4aa868871d60e7730ae570cf"],["/assets/icons/basic_laptop.svg","ffacb38c729a5ce614d3bdbc95b46349"],["/assets/icons/basic_life_buoy.svg","1bc3b02df236f9b850629f842ca59be6"],["/assets/icons/basic_lightbulb.svg","e60966021e6bd930f8f369e20f50cfdd"],["/assets/icons/basic_link.svg","4bc9bc3e153b5406813005d935f6c6a8"],["/assets/icons/basic_lock.svg","45a41b3bd2d1e312262505e557d4087c"],["/assets/icons/basic_lock_open.svg","9d22f616ae8ccb2f4c46202373fcc840"],["/assets/icons/basic_magic_mouse.svg","3c4bbba7487d0c94c5a5c8b753fedcae"],["/assets/icons/basic_magnifier.svg","595a7d9b50d2cb9e6cbe3bcf8640e53d"],["/assets/icons/basic_magnifier_minus.svg","fc89bb35c7b5ce64c4c49fbbf9274e94"],["/assets/icons/basic_magnifier_plus.svg","043381d7c75613f7c30b13689e3cec3a"],["/assets/icons/basic_mail.svg","45579af1a8682ce38d8774f54666888b"],["/assets/icons/basic_mail_multiple.svg","d50d5e0b24d5066af99731f8a99c828b"],["/assets/icons/basic_mail_open.svg","fcd1420a7056153d821725bffd8d4bf0"],["/assets/icons/basic_mail_open_text.svg","77607dcb249687aa6e26a1b7024335b1"],["/assets/icons/basic_male.svg","d8971d194d0e8f680c6255fd67d8e3ae"],["/assets/icons/basic_map.svg","8003409caf6e5a437be3d62f5cb16ab3"],["/assets/icons/basic_message.svg","2e4fa256a8895d4d8dbaaa1f82b4e59e"],["/assets/icons/basic_message_multiple.svg","d6b0aaecab54069cfc9870dd013d6691"],["/assets/icons/basic_message_txt.svg","73d895bee7025b8b00dc8dbfdb5ebcf6"],["/assets/icons/basic_mixer2.svg","e15e50f0a85c8c186570dceb3104972b"],["/assets/icons/basic_mouse.svg","35c335750ec52333fd9b81e33a75f6fe"],["/assets/icons/basic_notebook.svg","f1fab8a79adbd405df85778999ced6d5"],["/assets/icons/basic_notebook_pen.svg","c9638a5eaf87a6899d452eb2002fb2dd"],["/assets/icons/basic_notebook_pencil.svg","d117ad07254e0ee9974592ebc888a60d"],["/assets/icons/basic_paperplane.svg","06bb0a5d32a477055ccc42aea1a9ce13"],["/assets/icons/basic_pencil_ruler.svg","d654b375c9b600b102010e5537f2beeb"],["/assets/icons/basic_pencil_ruler_pen .svg","ec0bd5bd08482a4f85f4817606b6c8b6"],["/assets/icons/basic_photo.svg","3067a452efb31129ef82282e339a7872"],["/assets/icons/basic_picture.svg","714f5205e76ee71036bb876f16b067ec"],["/assets/icons/basic_picture_multiple.svg","5bcaca590b89378494ab7cc46917ea53"],["/assets/icons/basic_pin1.svg","58c8c1dfd35a1ed085d8119370f3c224"],["/assets/icons/basic_pin2.svg","28205f83f50e7552ff0978834d8c15b2"],["/assets/icons/basic_postcard.svg","aef7319957d3478cf7fb4b4139bd9856"],["/assets/icons/basic_postcard_multiple.svg","46f1437419bf8a7ea405794ad7abe8cc"],["/assets/icons/basic_printer.svg","d99f34c86dc2366a4b7c5f1eee906daa"],["/assets/icons/basic_question.svg","29d772b1f01ba7e97e019cf39a47c868"],["/assets/icons/basic_rss.svg","5d96e3fedd9cea51826190da385d6ab4"],["/assets/icons/basic_server.svg","25bf6733f7aa685f8334fbd1454548b7"],["/assets/icons/basic_server2.svg","c9a738e32ba7b8a7a01d79f2f6383a3f"],["/assets/icons/basic_server_cloud.svg","ca41ef27f7ffe8e0cb29fc336020e7e1"],["/assets/icons/basic_server_download.svg","7073102968d989d02efa0c2ee37e3645"],["/assets/icons/basic_server_upload.svg","5beee2a7c63ec231ba65ada3024aec57"],["/assets/icons/basic_settings.svg","fe1a8a4155a0e851e7cb8fbcc1493ad4"],["/assets/icons/basic_share.svg","5498b6272a52fa714490bb726901da4c"],["/assets/icons/basic_sheet.svg","bf75dbb6ebd1d8566c271911b0cb7885"],["/assets/icons/basic_sheet_multiple .svg","77b6aecd8a870dc01d9171ddfdc8eded"],["/assets/icons/basic_sheet_pen.svg","86d55a20447e2e9a870059d3f90abff4"],["/assets/icons/basic_sheet_pencil.svg","86f8ed3cf46844210ede2130d5db099c"],["/assets/icons/basic_sheet_txt .svg","10ceb47c2c7608f2b8ded759e6fce296"],["/assets/icons/basic_signs.svg","0f625dadcab5ab51c5f4720a292b906e"],["/assets/icons/basic_smartphone.svg","cbe2a85286a4d2a5c67fb351caacdedd"],["/assets/icons/basic_spades.svg","fcd717097188058f61e71db5e085c524"],["/assets/icons/basic_spread.svg","d166ea68b3c5d493b809efb59d54ad2e"],["/assets/icons/basic_spread_bookmark.svg","ab169aad39c1b300940ec3ce60a6ee02"],["/assets/icons/basic_spread_text.svg","ec27700c22d35a5af1c0c3c9b8134486"],["/assets/icons/basic_spread_text_bookmark.svg","3b7868024ced539eb314d3abd354961b"],["/assets/icons/basic_star.svg","8001c6bc18516e3c79c19db37d6f2703"],["/assets/icons/basic_tablet.svg","736179ea10e60a2e2db4641b6eeee6c1"],["/assets/icons/basic_target.svg","3d0281012ca07386255e2e6ede3e40cf"],["/assets/icons/basic_todo.svg","68328986344b3d241615161c09329556"],["/assets/icons/basic_todo_pen .svg","3f7501a4d27173f1d9b1d03fee4c0f94"],["/assets/icons/basic_todo_pencil.svg","c29f1be9d871ae725075c17c3edf5d53"],["/assets/icons/basic_todo_txt.svg","a98621a7cd202023a019e7af5ea5fc77"],["/assets/icons/basic_todolist_pen.svg","7dae44ef494cb4989746324bbd46ac54"],["/assets/icons/basic_todolist_pencil.svg","dc8f9c6aa43b661711ca05ce0171eb35"],["/assets/icons/basic_trashcan.svg","7ee70dcf7f4941021a662658a74cc7d7"],["/assets/icons/basic_trashcan_full.svg","d94e5c21f556d7da333e4bae996dd724"],["/assets/icons/basic_trashcan_refresh.svg","96766974b8ec789688ef51804356578f"],["/assets/icons/basic_trashcan_remove.svg","f9fb5df2c3ca7fcf100f9d9189e30821"],["/assets/icons/basic_upload.svg","1458c01232801014597c4296ddd1faed"],["/assets/icons/basic_usb.svg","6ba58b93056cd60061db927faf36949a"],["/assets/icons/basic_video.svg","21ad124bca2d47b529cb14ef07cb5bde"],["/assets/icons/basic_watch.svg","f6ff633995a5622ac5d82c693a72d038"],["/assets/icons/basic_webpage.svg","372eaaeda8d3d4c27b00f5c53714a118"],["/assets/icons/basic_webpage_img_txt.svg","5a435ffc0921b121c68c07469ea1619a"],["/assets/icons/basic_webpage_multiple.svg","952d6e207c8723dfcd79652073f24398"],["/assets/icons/basic_webpage_txt.svg","a04e9cc279415611ac4f2872539e698f"],["/assets/icons/basic_world.svg","1dfdf8ff4285ddadae9f1fcddc8a32c1"],["/assets/img/avatar.jpg","a85a9b126f50806964edb38553b4475e"],["/assets/img/barn_doors.jpg","6ebead917385b3b10033ecca6c1a8685"],["/assets/img/basement.jpg","619e28e375ecdd501133ead1563951a1"],["/assets/img/bathroom2.jpg","d27d9e0b751aa7650c36a1a230a102f6"],["/assets/img/cabin-home.jpg","1950e421e0282f94b6fddca6df7f24d8"],["/assets/img/chimney.jpg","2e3de536a5d7d2ec70dc6ede578ec1f1"],["/assets/img/dining_room.jpg","2ebafe94bc2b31786e1f9f59fa62c5bc"],["/assets/img/doors.jpg","0bbb72f2da64688cd767f456ed4f93ed"],["/assets/img/exterior_far.png","237b974c9b2f66dfac82588352a8ef15"],["/assets/img/exterior_front.jpg","34d15e640ce93f51592e7e4175138ca8"],["/assets/img/fence_snow.jpg","ba9a50a9406edbd07752f3bc83f15c14"],["/assets/img/framing.jpg","17d52b04d670f865fcce3f8cba4bd013"],["/assets/img/framing_2.jpg","8de8292048f4c3bdcb1189900e9a6f60"],["/assets/img/handrail.jpg","4037bf30c77e8cb8ce1489ec8b006071"],["/assets/img/home-bg.jpeg","efca9e0a22c9f04cffce3bc07ccd3107"],["/assets/img/house.jpg","b5063093d36921cc8b92e629bea6e67f"],["/assets/img/insulation.jpg","481eefcb91954e31d5e869d916cf7b0a"],["/assets/img/kelly.jpg","4670ba5b60e91c1d82d75114b957a080"],["/assets/img/kelly2.jpg","012a73e851c8c5d343f30728581644d6"],["/assets/img/kitchen.jpg","2e0b8055de8a73ff8c19800e97689788"],["/assets/img/kitchen_shelves.png","39f4c854aaae14b31a6be0f424ac0533"],["/assets/img/leanto.jpg","b85acd9507a2bb3985f686762c89d96e"],["/assets/img/living_room.jpg","5ad34b94aa454901d41b2195bbd28c27"],["/assets/img/living_room_1.jpg","c06c8ab291960e91bb01b9484bfd1390"],["/assets/img/loft.jpg","8383a1c4dadfeeac545ae2b4166ec911"],["/assets/img/logo.jpg","e90d23412689b72ec360d373f5269c1c"],["/assets/img/mill.png","8cca69daa068cada93dcc17a84deeff3"],["/assets/img/pic01.jpg","d12beed0c12742d141601b680f71d9d0"],["/assets/img/pic02.jpg","48e75fe6e66b1bba20a1d5fe640f999e"],["/assets/img/pic03.jpg","2ef5dbf43d61b5c4df9e0ec810e511f9"],["/assets/img/pic04.jpg","9db951e32318d03bbe12604e9e021292"],["/assets/img/pic05.jpg","754006cff317fe017a674fa0afc36148"],["/assets/img/pic06.jpg","14e869084df9ae09ff17ea39dcad81b6"],["/assets/img/pic07.jpg","dcc74ddb4db57dc851f6887cfb060986"],["/assets/img/pic08.jpg","f026254f64f9253d8e073a373934ea76"],["/assets/img/pic09.jpg","dd165ddf026a696b78da2a36fb024eb8"],["/assets/img/pic10.jpg","11ab43848d21b818ea55a90caccf5aee"],["/assets/img/pic11.jpg","da975a0c825dc084e21faaf940ab3272"],["/assets/img/pic12.jpg","89955ba19d1396f17700382e19352b14"],["/assets/img/potbelly.jpg","2c06403d1876f04631f26c42d5650b2f"],["/assets/img/saw_mill.jpg","f8077f7b2c5c3f2596f2d86e4b334c0b"],["/assets/img/shed.png","1b86bfdf4dbc6afdc58a4e2389025fd2"],["/assets/img/sivak.jpg","6f6abca0829abd9e755b535f2eac89a3"],["/assets/img/story.png","e668df1a49cd440f72c6cbc5c5c1448a"],["/assets/img/table.jpg","f0177e7dd396e5b930196da633408e94"],["/index.html","f0e51557f2f0f4eb12571a26bab8cc92"],["/inline.d41d8cd98f00b204e980.bundle.js","63ffe8cf2cdc113a6d912597ffdbf401"],["/main.b6c1dbe8447cadcd9c52.bundle.js","d4f274e0dae213903dc793e4bbd8403d"],["/styles.b2328beb0372c051d06d.bundle.js","fd25d4353c4abe5117bc54dbad5c3edb"],["/styles.e8701097f85bf6205b620a8b85b559cc.bundle.css","7430b06daff23251440f1ea528434f2e"],["/vendor.bb699a6a6886bb522db2.bundle.js","beabf52d5ae9201aa48604b8131629c2"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








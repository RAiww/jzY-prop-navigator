瀏覽器裝置判別
=======


> 作者： RAiww <ra@iww.twbbs.org> (http://ra.iww.twbbs.org/)<br />
> 版本： v0.0.0<br />
> 授權： MIT @license: [ra.iww.twbbs.org/ffish/MIT_License](http://ra.iww.twbbs.org/ffish/MIT_License)



## 簡介


判別瀏覽器裝置。



## 目錄


  * booklet
    * [裝置訊息收集冊](booklet/device_information.md)
  * lib
    * [naviVerify.js](lib/naviVerify.js)
  * test
    * [index.html](test/index.html)
    * [index.js](test/index.js)
    * [jDeviceList.js](test/jDeviceList.js)
  * [README.md](README.md)



## 使用方式


### 網頁


```html
<script src="/lib/naviVerify.js"></script>
<script>
    var jNavigatorID = naviVerify( navigator.userAgent );
<script>
```


[觀看演示](https://jsfiddle.net/RAiww/t8cb4053/)。


### Node JS


```js
var naviVerify = require('../lib/naviVerify');

http.createServer(function( request, response ){
    var jUserAgent = request.headers['user-agent'],
        jNavigatorID = naviVerify( jUserAgent );
});
```



## 分析內容資訊


jNavigatorID：

  1. mozilla：（數值）
    - 0（預設）
  2. os：
    - null（預設）
    - Windows
    - Android
    - Linux
    - Apple
  3. device：
    - null（預設）
    - Android （版本）- （機型）
    - Windows 10
    - Windows 8
    - Windows 7
    - Macintosh
    - iPad
    - iPhone
    - Mobile
  3. isMobile：（布林值）
    - null（預設）
  4. browser：
    - null（預設）
    - IE
      - IE 11
      - IE 10
      - IE 9
      - IE 8
    - 嚴格
      - Chrome
      - Safari
    - 寬鬆
      - Oepra
      - Edge
      - Firefox
      - Facebook
    - 相似
      - Safari
      - Chrome



## 裝置訊息參考


可參考 [UserAgentString.com](http://www.useragentstring.com/) 網站。（_其 API 中 "iPad" 會被解讀為 "iPhone"。_）

微軟也為其所寫的字串意義作解釋： [使用者代理字串 (Windows)](https://msdn.microsoft.com/zh-tw/library/hh920767(v=vs.85).aspx)。

另外也可參考我實測收集的裝置訊息 － [裝置訊息收集冊](booklet/device_information.md)。


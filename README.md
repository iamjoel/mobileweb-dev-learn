# 移动web端开发学习

## 头信息
加`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`    

如果 IE 用户安装了 Chrome Frame 插件，则可以使用这个插
件；如果没有安装，则使用 IE 浏览器最新、最好的引擎呈现，而不是以传统模式呈现。

## 兼容性
* [手机浏览器对html5的支持](http://mobilehtml5.org/)

## 琐碎的
### 滚动条
用iphone或ipad浏览很长的网页滚动时的滑动效果很不错吧？不过如果是一个div，然后设置 height:200px;overflow:auto;的话，可以滚动但是完全没有那滑动效果，很郁闷吧？

我看到很多网站为了实现这一效果，用了第三方类库，最常用的是iscroll（包括新浪手机页，百度等） 我一开始也使用，不过自从用了`-webkit-overflow-scrolling: touch;`样式后，就完全可以抛弃第三方类库了，把它加在body{}区域，所有的overflow需要滚动的都可以生效了。

### 移动端web页面使用position:fixed的坑
详细 见[这里](https://github.com/maxzhang/maxzhang.github.com/issues/2)    
总之    
* 在 android 手机下 fixed 表现要比 iOS 更好，软键盘弹出时，不会影响fixed元素定位；
* 不要在 fixed 元素中使用 input / textarea 元素。

## 其他
* [字体设置最佳实践](font.md)

## 资源
* [你的首个多设备站点 教程](https://developers.google.com/web/fundamentals/getting-started/your-first-multi-screen-site/?hl=zh-cn)
* [desing web principles](https://developers.google.com/web/fundamentals/layouts/principles/)
* [mobileTech
](https://github.com/jtyjty99999/mobileTech) 移动方面的资源的汇总
* [微信js-sdk](http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html)
* [html5手机web应用模板](https://github.com/h5bp/mobile-boilerplate)
* [友盟指数](http://www.umindex.com/) 移动设备的各种统计
* [常见手机的分辨率](http://screensiz.es/phone)
* [html5 please](http://html5please.com/) html5的特性及使用
* [腾讯移动Web前端知识库](https://github.com/AlloyTeam/Mars)

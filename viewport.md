# viewport
`<meta name="viewport" content="width=320.1,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">`    
width：控制 viewport 的大小，可以指定的一个值，如果 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。width=device-width
height：和 width 相对应，指定高度。
initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
maximum-scale：允许用户缩放到的最大比例。
minimum-scale：允许用户缩放到的最小比例。
user-scalable：用户是否可以手动缩放
minimal-ui: iOS 7.1 的 Safari 中为 meta 标签新增 minimal-ui 属性，让网页在加载时便可隐藏顶部的地址栏与底部的导航栏

[设置 viewport 实现定宽网页 WebApp 下布局自适应](http://wenzhixin.net.cn/2014/08/01/viewport_mobile)


由于 iphone 手机和 android 4.0 以上的手机支持修改 viewport 的 width 来改变页面的缩放情况，因此我们可以将 width 指定为页面设计的宽度，如此一来，你的页面正好充满 viewport 并全屏显示，而不会缩放。例如：
`<meta name="viewport" content="width=640px, user-scalable=no">`

但是对于 android 4.0 以下的手机，不支持设置 viewport 的 width，但是我们可以设置 Android 的另一参数target-densitydpi，从而达到相同的目的，计算 target-densitydpi 的公式如下：

```
$(function () {
    var DEFAULT_WIDTH = 640, // 页面的默认宽度
        ua = navigator.userAgent.toLowerCase(), // 根据 user agent 的信息获取浏览器信息
        deviceWidth = window.screen.width, // 设备的宽度
        devicePixelRatio = window.devicePixelRatio || 1, // 物理像素和设备独立像素的比例，默认为1
        targetDensitydpi;

    // Android4.0以下手机不支持viewport的width，需要设置target-densitydpi
    if (ua.indexOf("android") !== -1 && parseFloat(ua.slice(ua.indexOf("android")+8)) < 4) {
        targetDensitydpi = DEFAULT_WIDTH / deviceWidth * devicePixelRatio * 160;
        $('meta[name="viewport"]').attr('content', 'target-densitydpi=' + targetDensitydpi +
                ', width=device-width, user-scalable=no');
    }

    // TODO: 其他手机需要特殊处理的在下面
});
```

    目前只测试 android 和 ios/ipad 手机
    android 下使用 firefox 无法检测出 android 的版本，因此只能忽略 firefox


    http://www.ruanyifeng.com/blog/2012/05/responsive_web_design.html




https://developer.mozilla.org/zh-CN/docs/Mobile/Viewport_meta_tag
# 移动端页面使用rem来做适配
## rem介绍
rem（font size of the root element）是指相对于根元素（即html元素）的字体大小的单位。     
假设根元素的字体大小是`10px`, 则`5rem`的大小为 `5*10=50px`,例如
```
html{
	font-size: 10px;
}
p{
	width: 2rem; /* 2*10 = 20px;*/
	margin: 1rem;
}
```

## rem来做适配
以前我们往往这样做页面：viewport width 设置为 device-width，然后选我们需要兼容设备的最小宽度（一般是320px）。根据这最小宽度来做页面。单位使用`px`和百分比。在宽度不同的设备上，页面的字体大小，内容尺寸都是一样的，不同的是，大屏的内容间的空隙比小屏的大。所以这样做的缺点就是，页面在某些尺寸的设备上显示的效果不好。     

如果用rem来页面，我们会根据不同的设备宽度在根元素上设置不同的字体大小。宽度越宽，字体越大。然后对原本使用`px`的地方使用`rem`来替换。这样，字体大小，内容尺寸，对随着屏幕宽度的变大而变大。     

## 具体做法    
1 根据不同的设备宽度在根元素上设置不同的字体大小。    
我一般会设置1rem为1/10屏幕宽度。代码如下

```
;
(function(win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var tid;

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        if (width > 540) { // 最大宽度
            width = 540;
        }
        var rem = width / 10; // 将屏幕宽度分成10份， 1份为1rem
        docEl.style.fontSize = rem + 'px';
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    refreshRem();

})(window);
```

还有一种方法会根据 devicePixelRatio 设定 initial-scale 来放大 viewport，使页面按照物理像素渲染，提升清晰度。 代码见[这里](https://github.com/re54k/mobileweb-utilities/blob/master/util/mobile-util.js)

2  做页面时
我一般会将设计稿缩小至宽度为320px（切图标时，还是按照原图来切）。在上一步中，1rem为1/10屏幕宽度。因此，px与rem的转化为 `1px = 1 / 320 * 10rem`。如果使用Sass可以用如下的转化代码
```
// rem.scss
@charset "utf-8";
$divide: 10;
$pswWidth: 320;
$ppr: 320px/$divide/1rem;// 定义单位

// https://css-tricks.com/snippets/css/less-mixin-for-rem-font-sizing/
@mixin toRem($property, $values...) {
    $max: length($values);
    $remValues: '';
    @for $i from 1 through $max {
        $value: nth($values, $i) * $divide / $pswWidth;
        $remValues: #{$remValues + $value}rem;
        @if $i < $max {
            $remValues: #{$remValues + " "};
        }
    }
    #{$property}: $remValues;
}
```
然后，在其他文件中,类似如下进行调用
```
@import "rem";
.nav-list {
    height: 10px/$ppr;
    @include toRem(margin, 10, 15, 10, 15);
}
```
生成的CSS
```
.nav-list {
  height: 0.3125rem;
  margin: 0.3125rem 0.46875rem 0.3125rem 0.46875rem;
}
```

## 参考
* [web app变革之rem](http://isux.tencent.com/web-app-rem.html)
* [MobileWeb 适配总结](http://www.w3ctech.com/topic/979)
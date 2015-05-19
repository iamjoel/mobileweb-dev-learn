# devicePixelRatio
window.devicePixelRatio是设备上物理像素和设备独立像素(device-independent pixels (dips))的比例。即devicePixelRatio=设备物理像素/设备独立像素。

以iPhone为例，retina下devicePixelRatio=2，非retina下devicePixelRatio=1，这是因为无论是retina还是非retina屏，竖屏下，设备独立像素都是320，而它们的设备物理像素分别为640、320。

## devicePixelRatio = 1.5 引发的问题
devicePixelRatio = 1.5，即1.5 个物理像素显示一个页面像素。    
通过别人测试发现
* 对于左右边框，如果距离屏幕左边的页面像素是偶数，则宽度显示为 1.5x+0.5；否则显示为 1.5x-0.5
* 对于上下边框，如果距离屏幕上边的页面像素是偶数，则宽度显示为 1.5x+0.5；否则显示为 1.5x-0.5
* 要让容器左右或上下边框显示为一致的宽度，容器 width 或 height 必须是奇数

由于 devicePixelRatio = 1.5 设备的大量存在，为了避免显示宽度不一致，最好不要把边框宽度设置为奇数。理论上，不只是 border，大部分数值被设置为奇数的 css 属性都会遇到这个问题。

# 参考
* [devicepixelratio](http://www.zhangxinxu.com/wordpress/2012/08/window-devicepixelratio/)
* [devicePixelRatio = 1.5 引发的问题](https://www.imququ.com/post/devicepixelratio-and-border-width.html)
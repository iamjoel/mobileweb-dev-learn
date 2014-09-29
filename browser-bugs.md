# 移动浏览器的bugs

## touch事件穿透bug
在Android设备上的浮层上元素绑定有touch事件时，触摸事件会穿透浮层，并造成浮层下的元素或link被点中，造成期望外的结果。
### 产生原因
移动端的click都是touch之后，才会模拟触发。
触发的顺序是    
1. touchstart
1. touchmove
1. touchend
1. mousedown
1. mousemove
1. mouseenter
1. click
在重叠的区域里，被遮盖的元素绑定click，浮层元素绑定touch事件，且touch后浮层元素隐藏的话，就会造成穿透，因为click是在touch之后延迟触发的，浏览器会误认为是在被遮盖的元素上触发了click。

### 解决方案
* 使用[fastclick](https://github.com/ftlabs/fastclick)，这个可以非常完美的解决点穿问题。
* 在touchend事件回调中加入preventDefault, 并在下一层中加上pointer-events:none。

## 更多
https://github.com/Araw/MobileWeb-Dev-Wiki
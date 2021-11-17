## Attributes

参数   |   说明   |   类型	   |   可选值   |   默认值
---- |:----:|:---- |:---- |:----:|
visible |   Dialog显示状态   | boolean |   true / false   |   false
closeOnClickOverlay | 是否支撑点击关闭遮罩层 |   boolean   |   true / false  |   true  
zIndexLevel | z-index等级 |   Number   |   10 / 100 / 1000   |   10  

## hooks

方法   |   说明   |   类型	   |   参数类型   |   默认值
---- |:----:|:---- |:---- |:----:|
useDialog | 编程式创建Dialog的内容 | Function |   dialogOptions   |   —

## Events

参数   |   说明   |   类型	   |   可选值   |   默认值
---- |:----:|:---- |:---- |:----:|
ok   |   Dialog 点击ok的回调  |   Function |   —   |   —
cancel   |   Dialog 点击取消的回调   |  Function  |   —   |   —  

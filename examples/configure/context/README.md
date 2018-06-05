[Toc]

### context 上下文
类型: `string`

基础目录，**绝对路径**，用于从配置中解析入口起点(entry point)和 loader
```javascript
context: path.resolve(__dirname, "app")
```
默认使用当前目录，但是推荐在配置中传递一个值。这使得你的配置独立于 CWD(current working directory - 当前执行路径)。

文件目录
```javascript

    -context
     -a
      -

```

webpack.config.js
```javascript
const path=require('path');

module.exports={
    mode:"development",
    context: path.resolve(__dirname,'./a'),
    entry:"./a.js",
    output: {
        //输出路径
        path:__dirname,
        //文件名，不能对filename使用path函数
        filename: "./dist/dist.js"
    }
};
```

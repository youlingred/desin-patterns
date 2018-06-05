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

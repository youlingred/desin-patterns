const name=process.argv[2];

if(name === undefined ){
    throw  new Error('文件名不能为空');
}
const fs = require('fs');
const path =require('path');
const tplDir = path.resolve(__dirname,'./createtpl')
const distDir= path.join(__dirname,'./examples',name);
const scriptDir= path.join(__dirname,'./examples',name,'script');

function copy(src,dist){
    if(fs.statSync(src).isFile()){
        fs.copyFileSync(src,dist)
    }else{
        fs.readdirSync(src).forEach(file=>copy(path.join(src,file),path.join(dist,file)))
    }
}
fs.mkdirSync(distDir);
fs.mkdirSync(scriptDir);
copy(tplDir,distDir);

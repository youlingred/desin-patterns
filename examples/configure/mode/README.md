
### mode 模式

类型："production" | "development" | "none"

* `production`  为生产构建启用多个优化
* `development` 启用有用的开发工具
* `none`        无默认设置

选择的模式告诉webpack相应地使用其内置的优化

webpack.config.dev.js}
```javascript
    module.exports={
  mode:'development'
    // ...
};
```
webpack.config.prod.js
```javascript
    module.exports={
  mode:'production'
    // ...
};
```

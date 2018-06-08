### output 输出

```javascript
output: {
  library: "someLibName",
  libraryTarget: "umd",
  filename: "someLibName.js",
  auxiliaryComment: "Test Comment"
}
```

`output` 位于对象最顶级键(key)，包括了一组选项，指示 `webpack` 如何去输出、以及在哪里输出你的「bundle、asset 和其他你所打包或使用 webpack 载入的任何内容」

#### `output.filename`

*类型*：`string` `function`

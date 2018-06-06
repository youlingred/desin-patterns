const fs = require('fs');
const path =require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
// console.log(config)
webpack(config.entry_str, (err, stats) => {
    if (err || stats.hasErrors()) {
        // 在这里处理错误
    }
});
webpack(config.entry_array, (err, stats) => {
    if (err || stats.hasErrors()) {
        // 在这里处理错误
    }
});
webpack(config.entry_obj, (err, stats) => {
    if (err || stats.hasErrors()) {
        // 在这里处理错误
    }
});
webpack(config.entry_func, (err, stats) => {
    if (err || stats.hasErrors()) {
        // 在这里处理错误
    }
});

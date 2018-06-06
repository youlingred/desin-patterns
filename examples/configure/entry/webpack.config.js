const path=require('path');
const config = {
    entry_str: {
        mode: "development",
        entry: "./home.js",
        output: {
            path: path.resolve(__dirname,"./dist/entry_str"),
            filename: "[name].js"
        }
    },
    entry_array: {
        mode: "development",
        entry: ["./home.js", "./about.js"],
        output: {
            path: path.resolve(__dirname,"./dist/entry_array"),
            filename: "[name].js"
        }
    },
    entry_obj: {
        mode: "development",
        entry: {
            home: "./home.js",
            about: "./about.js"
        },
        output: {
            path: path.resolve(__dirname,"./dist/entry_obj"),
            filename: "[name].js"
        }
    },
    entry_func: {
        mode: "development",
        entry: () => ["./home.js", "./about.js"],
        output: {
            path: path.resolve(__dirname,"./dist/entry_func"),
            filename: "[name].js"
        }
    }
}
module.exports = config;

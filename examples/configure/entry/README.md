### entry 入口

*类型*：string | [string] | object { <key>: string | [string] } | (function: () => string | [string] | object { <key>: string | [string] })

起点或是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行。

动态加载的模块不是入口起点。

*简单规则*：每个 HTML 页面都有一个入口起点。单页应用(SPA)：一个入口起点，多页应用(MPA)：多个入口起点。

`string`

```javascript
	entry:"./home.js"
```

`[string]`

```javascript
	entry:["./home.js","./about.js"]
```

`object`

```javascript
	entry: {
	  home: "./home.js",
	  about: "./about.js",
	  contact: "./contact.js"
	  
	}
```

`function`

```javascript
	entry: ()=>{
			//return "./home.js"
			//return ["./home.js","./about.js"]
			return  {
						  home: "./home.js",
						  about: "./about.js",
						  contact: "./contact.js"
					  }
				}
```

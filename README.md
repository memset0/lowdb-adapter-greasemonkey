# lowdb-adapter-greasemonkey

using lowdb with [Greasemonkey API](https://wiki.greasespot.net/Category:API_Reference)


### Usage

```js
// ==UserScript==
// @require      https://unpkg.com/lodash@4/lodash.min.js
// @require      https://unpkg.com/lowdb@0.17/dist/low.min.js
// @require      https://raw.githubusercontent.com/memset0/lowdb-adapter-greasemonkey/master/GreasemonkeyAsync.js
// @grant        GM.setValue
// @grant        GM.getValue
// ==/UserScript==

const adapter = new GreasemonkeyAsync('data')
const db = low(adapter)

db.then((data) => {
	data.defaults({ posts: [], user: {}, count: 1 }).write()
	data.update('count', n => n + 1).write()
	console.log(data.get('count').value())
});
```


// <img src="cover.jpg" width="300">
// <img :src="$withBase('/en/you-dont-know-js-v1/async-performance/cover.jpg')" width="300">

// 可以使用 vscode 的正则替换功能
//<img (src="([^"]*)")(.*)?>
// <img :src="$withBase('/you-dont-know-js-v1/es6-beyond/$2')"$3>
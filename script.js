fetch("./js.json")
.then(res => res.js.json())
.then(data => console.log(data))
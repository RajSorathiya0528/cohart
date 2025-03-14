Function.prototype.describe = function(){
	console.log("Hello, from Javascript Prototype.")
	console.log(`Call from ${this.name} function.`)
}
function createMagic(){
	console.log("Hello, from createMagic.")
}

const myfun = () => {}
myfun.describe()
createMagic.describe()
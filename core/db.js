const mongoose = require("mongoose");

const db = ()=>{
	mongoose.connect("mongodb+srv://db:123456789%21%23@cluster0.bzyopxr.mongodb.net/?retryWrites=true&w=majority")
	.then(()=>{
		console.log("database running")
	})
	.catch((e)=>{
		console.log(e)
	});
}

module.export = db;
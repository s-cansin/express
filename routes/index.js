const router = require("express").Router();

router.get("/", (req, res)=>{
	return res.send("home page");
})

export.module = router;
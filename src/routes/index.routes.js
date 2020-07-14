const { Router } = require('express');
const router = Router();

router.get('/', (req,res )=> {
	res.render('index.ejs');
});

router.get('/page2', (req,res )=> {
	res.render('page2.ejs');
});

module.exports = router;
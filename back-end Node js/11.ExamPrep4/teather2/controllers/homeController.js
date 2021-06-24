const router = require('express').Router();

router.get('/', async (req, res)=>{
    const play = await req.storage.getAllPlays()
    res.render('home', { play });
})

module.exports = router;
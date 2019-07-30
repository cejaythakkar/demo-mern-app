const express = require('express'),
    router = express.Router(),
    fetch = require('node-fetch');

router.get('/',async (request ,response , next) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await data.json()
    return response.status(200).json(json);
})
module.exports = router;
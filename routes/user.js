const express = require('express')
const router = express.Router()

const serverless = require("serverless-http");

const app = express();



router.get('/test', (request, response) => {

    response.send("success   ")
 
})

module.exports = router
module.exports.handler = serverless(app);
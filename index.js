// const qrcode = require('qrcode-terminal');
// const { Client, LocalAuth } = require('whatsapp-web.js');
// const whatsapp = new Client({
//   authStrategy: new LocalAuth({
//     clientId: "YOUR_CLIENT_ID"
//   }),
//   puppeteer: {
//     args: ['--no-sandbox'],
//   }
// });

// const bodyParser = require('body-parser')
// const cors = require('cors')
// const express = require('express')
// const app = express()
// const port = process.env.PORT || 8080

// app.use(cors())

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/mantap', (req, res) => {
//   console.log(req.body)
//   whatsapp.sendMessage(req.body.phoneNumber, req.body.massage)
//   res.send('sip')
// })


// whatsapp.on('qr', (qr) => {
//   qrcode.generate(qr, { small: true });
// });

// whatsapp.on('ready', () => {
//   console.log('whatsapp is ready!');
// });

// whatsapp.on('message', async (message) => {
//   console.log(message.body)
//   console.log(message)
//   if (message.body === '!ping') {
//     await message.reply('pong');
//   }
// });

// whatsapp.initialize();

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// // Export the Express API
// module.exports = app;


const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send('Express JS on Vercel')
})

app.get('/ping', (req, res) => {
    res.send('pong 🏓')
})

const port = process.env.PORT || 8080

app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
        return res.status(500).send(err.message)
    } else {
        console.log('[INFO] Server Running on port:', port)
    }
})
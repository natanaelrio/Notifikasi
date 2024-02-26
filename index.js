const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');
const whatsapp = new Client({
  authStrategy: new LocalAuth({
      clientId: "YOUR_CLIENT_ID"
  })
});


const bodyParser = require('body-parser')

const express = require('express')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log('wdwdwdwddy!');
  res.send()
})


app.post('/mantap', (req, res) => {
  console.log(req.body)
  whatsapp.sendMessage(req.body.phoneNumber, req.body.massage)
  res.send()
})


whatsapp.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

whatsapp.on('ready', () => {
  console.log('whatsapp is ready!');
});

whatsapp.on('message', async (message) => {
  console.log(message.body)
  console.log(message)
  if (message.body === '!ping') {
    await message.reply('pong');
  }
});

whatsapp.initialize();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



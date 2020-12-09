const Telegraf = require('telegraf')
const axios = require('axios')
const bot = new Telegraf(`${REPLACE_WITH_API_KEY}`) 

// bot.use((ctx) => {
//     ctx.reply("Hii Human being")
// })
bot.start((ctx)=>{
    ctx.reply(`Welcome to Link Mine Africa, how may i be of help? to view a list of commands, press /help`)
})
bot.help((ctx)=>{
    ctx.reply(`This bot can perform a list of commands\n - /start\n - /help `)
})
bot.on('sticker',(ctx) => {
    ctx.reply(" Cool Sticker !! ")
})
bot.hears("hello",(ctx)=>{
    ctx.reply("Hi, Welcome to LinkMine, to get Familiar with the platform, kindly ")
})
bot.command('say',(ctx)=>{
    msg = ctx.message.text
    msgArray=msg.split(' ')
    msgArray.shift()
    newMsg= msgArray.join(' ')
    ctx.reply(newMsg)
})
bot.command('fortune',(ctx)=>{
    url="http://yerkee.com/api/fortune",
    axios.get(url)
    .then((res)=>{
        ctx.reply(res.data.fortune)
    })
})

bot.launch()
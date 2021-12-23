import 'dotenv/config'
import linebot from 'linebot'
import nearestResturant from './commends/nearestResturant.js'
import guidebook from './commends/guidebook.js'
import randomResturant from './commends/randomResturant.js'
import randomResturantpostback from './commends/randomResturantpostback.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async (event) => {
  if (event.message.type === 'text') {
    if (event.message.text.startsWith('!操作指令')) {
      guidebook(event)
    } else if (event.message.text.startsWith('!離我最近')) {
      event.reply('請傳入位置資訊')
    } else if (event.message.text.startsWith('!隨機')) {
      randomResturant(event)
    }
  } else if (event.message.type === 'location') {
    // 排序用richmenu 點擊
    nearestResturant(event)
    console.log('nearest')
  }
})

bot.on('postback', function (event) {
  randomResturantpostback(event)
  console.log('postback')
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

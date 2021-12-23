import nearestResturant from '../template/nearestResturant.js'
import { dataMR } from '../data_schedule.js'
import distance from '../distance.js'
// import fs from 'fs'

export default async (event) => {
  const lineLat = event.message.latitude
  const lineLng = event.message.longitude

  // 跑迴圈
  console.log(dataMR.length)
  for (let i = 0; i < dataMR.length; i++) {
    // 判斷前五筆
    if (dataMR[i].id === '49618') {
      dataMR[i].storePosition.lat = 24.148368253287018
      dataMR[i].storePosition.lng = 120.66803588337557
      console.log('鮨戎的位置更改')
    }
    const dis = distance(dataMR[i].storePosition.lat, dataMR[i].storePosition.lng, lineLat, lineLng, 'K').toFixed(1)
    // 推入距離至資料中
    dataMR[i].distance = dis
    dataMR.sort((a, b) => a.distance - b.distance)
  }
  for (let i = 0; i < 5; i++) {
    nearestResturant.contents.contents[i].hero.url = dataMR[i].Image
    // description
    nearestResturant.contents.contents[i].hero.action.text = `${dataMR[i].storeName}：${dataMR[i].description}`
    nearestResturant.contents.contents[i].body.contents[0].text = dataMR[i].storeName
    nearestResturant.contents.contents[i].body.contents[1].contents[0].text = `NT$${dataMR[i].price[0]}・`
    nearestResturant.contents.contents[i].body.contents[1].contents[1].text = dataMR[i].price[1]
    nearestResturant.contents.contents[i].body.contents[2].contents[1].text = `與我的距離為 ${dataMR[i].distance} km`

    if (dataMR[i].city === 'Taipei') {
      nearestResturant.contents.contents[i].body.contents[3].contents[0].text = `台北市${dataMR[i].address}`
      nearestResturant.contents.contents[i].footer.contents[1].action.uri = encodeURI(`https://www.google.com.tw/maps/search/?api=1&query=${dataMR[i].mapName}`)
    } else {
      nearestResturant.contents.contents[i].body.contents[3].contents[0].text = `台中市${dataMR[i].address}`
      nearestResturant.contents.contents[i].footer.contents[1].action.uri = encodeURI(`https://www.google.com.tw/maps/search/?api=1&query=${dataMR[i].mapName}`)
    }
    nearestResturant.contents.contents[i].footer.contents[0].action.uri = dataMR[i].webUrl
  }
  // fs.writeFileSync('./nearestResturant.json', JSON.stringify(nearestResturant, null, 2))
  // flex.contents.body.contents[0].text = dataMR[0].id
  // 輸出檔案讓自己看的更清楚ＱＱＱ

  event.reply(nearestResturant)
  // fs.writeFileSync('./nearestResturant.json', JSON.stringify(nearestResturant, null, 2))
}

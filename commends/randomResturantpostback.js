import randomResturantpostback from '../template/randomResturantpostback.js'
import { dataMR } from '../data_schedule.js'
// import fs from 'fs'

export default function (event) {
  const dataMRFilter = []
  if (event.postback.data === 'taipei') {
    for (let i = 0; i < dataMR.length; i++) {
      if (dataMR[i].city === 'Taipei') {
        dataMRFilter.push(dataMR[i])
      }
    }
    const temprandomTaipei = []
    let randomTaipei = 0
    for (let i = 0; i < 5; i++) {
      randomTaipei = Math.floor(Math.random() * dataMRFilter.length)
      if (temprandomTaipei.indexOf(randomTaipei) === -1) {
        temprandomTaipei.push(randomTaipei)
      } else {
        i--
      }
    }
    for (let i = 0; i < 5; i++) {
      const idx = temprandomTaipei[i]
      console.log(idx)
      randomResturantpostback.contents.contents[i].hero.url = dataMR[idx].Image
      // description
      randomResturantpostback.contents.contents[i].hero.action.text = `${dataMRFilter[idx].storeName}：${dataMRFilter[idx].description}`
      randomResturantpostback.contents.contents[i].body.contents[0].text = dataMRFilter[idx].storeName
      randomResturantpostback.contents.contents[i].body.contents[1].contents[0].text = `NT$ ${dataMRFilter[idx].price[0]}`
      randomResturantpostback.contents.contents[i].body.contents[1].contents[1].text = dataMRFilter[idx].price[1]
      randomResturantpostback.contents.contents[i].footer.contents[0].action.uri = dataMRFilter[idx].webUrl
      randomResturantpostback.contents.contents[i].body.contents[2].contents[0].text = `台北市${dataMRFilter[idx].address}`
      randomResturantpostback.contents.contents[i].footer.contents[1].action.uri = encodeURI(`https://www.google.com.tw/maps/search/?api=1&query=${dataMRFilter[idx].mapName}`)
    }
  } else if (event.postback.data === 'taichung') {
    for (let i = 0; i < dataMR.length; i++) {
      if (dataMR[i].city === 'Taichung') {
        dataMRFilter.push(dataMR[i])
      }
    }
    let randomTaichung = 0
    const temprandomTaichung = []
    for (let i = 0; i < 5; i++) {
      randomTaichung = Math.floor(Math.random() * dataMRFilter.length)
      if (temprandomTaichung.indexOf(randomTaichung) === -1) {
        temprandomTaichung.push(randomTaichung)
      } else {
        i--
      }
      // 0-175
      // console.log(randomTaichung)
    }
    for (let i = 0; i < 5; i++) {
      const idx1 = temprandomTaichung[i]
      console.log(idx1)
      randomResturantpostback.contents.contents[i].hero.url = dataMRFilter[idx1].Image
      // description
      randomResturantpostback.contents.contents[i].hero.action.text = `${dataMRFilter[idx1].storeName}：${dataMRFilter[idx1].description}`
      randomResturantpostback.contents.contents[i].body.contents[0].text = dataMRFilter[idx1].storeName
      randomResturantpostback.contents.contents[i].body.contents[1].contents[0].text = `NT$ ${dataMRFilter[idx1].price[0]}`
      randomResturantpostback.contents.contents[i].body.contents[1].contents[1].text = dataMRFilter[idx1].price[1]
      randomResturantpostback.contents.contents[i].footer.contents[0].action.uri = dataMRFilter[idx1].webUrl
      randomResturantpostback.contents.contents[i].body.contents[2].contents[0].text = `台中市${dataMRFilter[idx1].address}`
      randomResturantpostback.contents.contents[i].footer.contents[1].action.uri = encodeURI(`https://www.google.com.tw/maps/search/?api=1&query=${dataMRFilter[idx1].mapName}`)
    }
  }
  // console.log('randomResturantpostback')
  event.reply(randomResturantpostback)
  // fs.writeFileSync('./randomResturantpostback.json', JSON.stringify(randomResturantpostback, null, 2))
}

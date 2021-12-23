import randomResturant from '../template/randomResturant.js'
// import fs from 'fs'

export default function (event) {
  event.reply(randomResturant)
  // fs.writeFileSync('./randomResturant.json', JSON.stringify(randomResturant, null, 2))
}

import axios from 'axios'
import cheerio from 'cheerio'
import schedule from 'node-schedule'
// import fs from 'fs'
const resturantNum = 1000
export const dataMR = []
const getData = async () => {
  try {
    // 直接抓到所有的資料 hitsPerPage 改成大於餐廳數
    const { data } = await axios.post('https://8nvhrd7onv-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(3.35.1)%3B%20Browser%20(lite)%3B%20instantsearch.js%20(4.24.1)%3B%20JS%20Helper%20(3.4.5)&x-algolia-application-id=8NVHRD7ONV&x-algolia-api-key=71b3cff102a474b924dfcb9897cc6fa8', { requests: [{ indexName: 'prod-restaurants-zh_TW', params: `aroundLatLngViaIP=true&aroundRadius=all&filters=status%3APublished&hitsPerPage=${resturantNum}&attributesToRetrieve=%5B%22_geoloc%22%2C%22region%22%2C%22city%22%2C%22country%22%2C%22cuisines%22%2C%22good_menu%22%2C%22image%22%2C%22main_image%22%2C%22michelin_award%22%2C%22name%22%2C%22slug%22%2C%22new_table%22%2C%22offers%22%2C%22offers_size%22%2C%22online_booking%22%2C%22other_urls%22%2C%22site_slug%22%2C%22site_name%22%2C%22take_away%22%2C%22url%22%5D&maxValuesPerFacet=200&page=0&optionalFilters=sites%3Atw&facets=%5B%22country.cname%22%2C%22country.slug%22%2C%22region.slug%22%2C%22city.slug%22%2C%22good_menu%22%2C%22new_table%22%2C%22take_away%22%2C%22distinction.slug%22%2C%22green_star.slug%22%2C%22offers%22%2C%22cuisines.slug%22%2C%22area_slug%22%2C%22online_booking%22%2C%22facilities.slug%22%2C%22categories.lvl0%22%5D&tagFilters=&facetFilters=%5B%5B%22country.cname%3Ataipei-taichung%22%5D%5D` }, { indexName: 'prod-restaurants-zh_TW', params: 'aroundLatLngViaIP=true&aroundRadius=all&filters=status%3APublished&hitsPerPage=1&attributesToRetrieve=%5B%22_geoloc%22%2C%22region%22%2C%22city%22%2C%22country%22%2C%22cuisines%22%2C%22good_menu%22%2C%22image%22%2C%22main_image%22%2C%22michelin_award%22%2C%22name%22%2C%22slug%22%2C%22new_table%22%2C%22offers%22%2C%22offers_size%22%2C%22online_booking%22%2C%22other_urls%22%2C%22site_slug%22%2C%22site_name%22%2C%22take_away%22%2C%22url%22%5D&maxValuesPerFacet=200&page=0&optionalFilters=sites%3Atw&attributesToHighlight=%5B%5D&attributesToSnippet=%5B%5D&tagFilters=&analytics=false&clickAnalytics=false&facets=country.cname' }] })
    const stores = data.results[0].hits
    for (const store of stores) {
      dataMR.push({
        id: store.objectID,
        storeName: store.name,
        mapName: store.name.replace(/ /g, ''),
        storePosition: {
          lat: store._geoloc.lat,
          lng: store._geoloc.lng
        },
        city: store.city.name,
        award: store.michelin_award,
        address: store._highlightResult.street.value,
        webUrl: `https://guide.michelin.com${store.url}`,
        url: store.url,
        Image: store.main_image?.url || ''
      })
    }
    console.log('成功更新0')
    for (let i = 0; i < dataMR.length; i++) {
      // console.log(dataMR[i].webUrl)
      const { data } = await axios.get(dataMR[i].webUrl)
      const $ = cheerio.load(data)
      const price = $('.restaurant-details__heading-price').eq(0).text().replace(/\r\n|\n/g, '').replace(/\s+/g, '').split('TWD•')
      // console.log('price', price[0]) // 價格
      // console.log('菜型', price[1]) // 菜型：台灣菜
      // description 米其林指南的觀點
      const description = $('.js-show-description-text p').text().trim()
      // console.log('米其林指南的觀點', description)
      dataMR[i].price = price
      dataMR[i].description = description
    }
    // fs.writeFileSync('./dataMR.json', JSON.stringify(dataMR, null, 2))
    console.log('成功更新1')
  } catch (error) {
    console.log('更新失敗')
  }
}
getData()
schedule.scheduleJob('0 4 * * *', getData)

// https://share.garmin.com/Feed/Share/MXKYA

const garminMapshareKey = process.env.GARMIN_MAPSHARE_FEED_KEY
const url = `https://share.garmin.com/Feed/Share/${garminMapshareKey}`

async function getGarminMapshare() {
  const response = await fetch(url)
  const text = await response.text()
  const parser = new DOMParser()
  const kml = parser.parseFromString(text, 'text/xml')
}

import { buildImageUrl } from './index'

it('should replace sizes in image url', () => {
  const url =
    'https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/7b/1d/f0/7b1df048-0017-8ac0-98c9-735f14849606/mza_7507996640781423701.png/{w}x{h}bb.jpg'

  expect(buildImageUrl(url, 48)).toBe(
    'https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/7b/1d/f0/7b1df048-0017-8ac0-98c9-735f14849606/mza_7507996640781423701.png/48x48bb.jpg',
  )
})

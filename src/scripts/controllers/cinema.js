import cinemaTpl from '../views/cinema.html'
// import cinemaListTpl from '../views/cinema-list.html'
import cinemaModel from '../models/district'

var datasource = []

const render = async () => {
  // $('main').html(cinemaTpl)
  let districtList = datasource = (await cinemaModel.district()).content.data.page.result
  await renderList(districtList)
//   scroll()
}

// const scroll = () => {
//   let posScroll = new BScroll('main', {
//     probeType: 2,
//     startY: -40
//   })

//   let head = $('.head img'),
//       foot = $('.foot img')

//   posScroll.on('scroll', function () {
//     let y = this.y,
//         maxY = this.maxScrollY - y
    
//     if ( y >= 0) {
//       head.addClass('up')
//     }

//     if (maxY >= 0) {
//       foot.addClass('down')
//     }
//   })

//   posScroll.on('scrollEnd', async function () {
//     let y = this.y,
//         maxY = this.maxScrollY - y

//     if (y >= -40 && y < 0) {
//       this.scrollTo(0, -40)
//     } else if (y >= 0) {
//       head.attr('src', '/images/ajax-loader.gif')

//       let result = await positionModel.refresh()
//       let list = datasource = [
//         ...result.content.data.page.result,
//         ...datasource
//       ]
//       renderList(list)

//       this.refresh()
//       head.attr('src', '/images/arrow.png')
//           .removeClass('up')
//       this.scrollTo(0, -40)
//     }

//     if (maxY >= -40 && maxY < 0) {
//       this.scrollTo(0, this.maxScrollY + 40)
//     } else if (maxY >= 0) {
//       foot.attr('src', '/images/ajax-loader.gif')

//       let result = await positionModel.loadmore(++pageNo)
//       let list = datasource = [
//         ...datasource,
//         ...result.content.data.page.result
//       ]
//       renderList(list)

//       this.refresh()
//       foot.attr('src', '/images/arrow.png')
//           .removeClass('down')
//       this.scrollTo(0, this.maxScrollY + 40)
      
//     }
//   })
// }

const renderList = async (districtList) => {
  let template = Handlebars.compile(cinemaTpl)
  let html = template({ districtList })
  $('main').html(html)
}

export default {
  render
}
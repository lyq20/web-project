import cinemaTpl from '../views/cinema.html'
import cinemaListTpl from '../views/cinema-list.html'
import cinemaModel from '../models/district'

// var datasource = []

const render = async () => {
  let districtList = (await cinemaModel.district()).content.data.page.result
  let cinemaList = (await cinemaModel.cinemaList()).data.cinemas;
  await renderList(districtList, cinemaList)
}

const renderList = async (districtList, cinemaList) => {
  let template = Handlebars.compile(cinemaTpl)
  let html = template({ districtList })
  $('main').html(html)
  cinemaTab(cinemaList)
}

const cinemaTab = (cinemaList) => {
  console.log(cinemaList);
  $('main .district .title').on('tap', function() {
    $(this).next().html('');
    $(this).parent().toggleClass('active');
    let currentCinemaList = [];
    for(var i = 0; i < cinemaList.length; i++) {
      if(cinemaList[i].district.pinyin === $(this).parent().attr('data-pinyin')) {
        currentCinemaList.push(cinemaList[i]);
      }
    }
    let template = Handlebars.compile(cinemaListTpl)
    let html = template({ currentCinemaList })
    $(this).next().html(html)
  })
}

const renderCinema = async ()=>{

}

export default {
  render
}
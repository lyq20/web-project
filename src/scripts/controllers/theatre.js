import theatreTpl from '../views/theatre.html'
import theatreModel from '../models/theatre'

const render = async (theatreId) => {
    let theatreInfo = (await theatreModel.theatre(theatreId)).data.cinema
    await console.log(theatreInfo)
    await renderTheatre(theatreInfo)
}

const renderTheatre = (theatreInfo) => {
    let template = Handlebars.compile(theatreTpl)
    let html = template(theatreInfo)
    $('main').html(html)
    renderFirstList(theatreInfo.services)
    listToggle(theatreInfo.services)
}

const renderFirstList = (services) => {
    console.log(services)
    for(var i = 0; i < services.length; i++) {
        if(services[i].name === '取票') {
            $('.li-box p').text(services[i].description)
            break
        }
    }
}

const renderDetailList = (services, type) => {
    let str = ''
    for(let i = 0; i < services.length; i++) {
        if(services[i].type === Number(type) && Number(type) < 5) {
            $('.li-box p').text(services[i].description)
            break
        } else if (Number(type) === 5 && services[i].type === 5) {
            $('.li-box p').text(services[i].description)
            str = services[i].description
            continue
        } else if (Number(type) === 5 && services[i].type === 6) {
            $('.li-box p').text(str + '&nbsp;' + services[i].description)
            break
        } else {
            $('.li-box p').text('暂无信息')
        }
    }
}

const listToggle = (services) => {
    $('li.col-xs-2').on('tap', function() {
        let type = $(this).attr('data-type')
        $(this).addClass('active').siblings().removeClass('active')
        renderDetailList(services, type)
    })
}

export default {
    render
}
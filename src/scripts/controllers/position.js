import positionTpl from '../views/position.html'
import positionListTpl from '../views/position-list.html'
import positionListTplbot from '../views/position-list-bot.html'
import positionModel from '../models/position'
var datasource = []
var datasources = []

const render = async () => {
    $('main').html(positionTpl)
    let list = datasource = (await positionModel.list()).data.films
    let listbot = datasources = (await positionModel.listbot()).data.films
    await renderListbot(listbot)
    await renderList(list)
    positionclick()
    listClick()
}
const renderList = async (list) => {
    let template = Handlebars.compile(positionListTpl)
    let html = template({ list })
    $('main .one').html(html)
}
const renderListbot = async (listbot) => {
    let template = Handlebars.compile(positionListTplbot)
    let html = template({ listbot })

    $('main .two').html(html)
}
// 详情页跳转
const positionclick = () => {
    $('.position li').on('tap', function () {
        let hashs = ['details']
        let good = {};
        good.id = $(this).attr('data-id')
        let arr = []
        arr.push(good);
        localStorage.setItem("ids", JSON.stringify(arr));

        location.hash = hashs
    })
}

// 更多、类表页跳转
const listClick = ()=>{
    $('.position .more>a').on('tap',function(){
        let hashs = ['movie']
        location.hash = hashs
    })
}

export default {
    render,
}
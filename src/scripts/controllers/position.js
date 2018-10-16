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
const positionclick = ()=>{
    $('.position li').on('tap',function(){
        let hashs = ['details']
        // let num = $(this).index()
        location.hash = hashs
        console.log($(this).index())
    })
}
export default {
    render,
}
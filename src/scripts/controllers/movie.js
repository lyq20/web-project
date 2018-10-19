import movieTpl from '../views/movie.html'
import moviesListTpl from '../views/movie-list.html'
import moviesModel from '../models/movie'

var datasource = []
var moviepage = 1
//插入
const render = async () => {
    $("main").html(movieTpl);
    let list = datasource = (await moviesModel.list()).data.films
    await renderList(list);

    //滚动事件，实现加载更多
    scroll();
    comClick();
    movieClick();
}

const renderList = async (list) => {
    let template = Handlebars.compile(moviesListTpl);
    let html = template({ list })
    $('.movies_ul').html(html);
}
const scroll = () => {

    let movScroll = new BScroll('main', {
        probeType: 2
    })
    movScroll.on('scrollEnd', async function () {

        let y = this.y,
            maxY = y - this.maxScrollY
        // console.log(this.y, this.maxScrollY, maxY)
        if (maxY <= 5 ) {
            this.scrollTo(0, this.maxScrollY)
            console.log('scrollmovie')
            let result = await moviesModel.loadmoremovie(++moviepage)
            let list = datasource = [
                ...datasource,
                ...result.data.films
            ]
            renderList(list)
        }
        movieClick();
    })
    
}
const comClick = ()=>{
    $('.movies_nav>a').eq(1).on('tap',function(){
        let hashs = ['coming']
        location.hash = hashs
        // $(this).addClass('change').siblings().removeClass('change')
    })
}
// const movieClick = ()=>{
//     $('.movies_ul>li').on('tap',function(){
//         let hashs = ['details']
//         location.hash = hashs
//     })
// }

const movieClick =()=>{
    $('.movie_box>ul>li').on('tap',function(){
        let hashs = ['details']
        let good = {};
        good.id = $(this).attr('data-id')
        console.log(good.id)
        console.log($('.movie_box>ul>li').length)
        let arr = []
        arr.push(good);
        localStorage.setItem("ids", JSON.stringify(arr));
        location.hash = hashs
    })
}
export default {
    render
}
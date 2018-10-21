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
}

const renderList = async (list) => {
    let template = Handlebars.compile(moviesListTpl);
    let html = template({ list })
    $('.movies_ul').html(html);
}
const scroll = () => {

    let movScroll = new BScroll('.movie_box', {
        probeType: 2
    })
    movScroll.on('scrollEnd', async function () {
        let y = this.y,
            maxY = y - this.maxScrollY
        if (y <= maxY) {
            this.scrollTo(0, this.y)
            console.log('scrollmovie')
            let result = await moviesModel.loadmoremovie(++moviepage)
            let list = datasource = [
                ...datasource,
                ...result.data.films
            ]
            renderList(list)
        }
    })
}
const comClick = () => {
    $('.movies_nav>a').eq(1).on('tap', function () {
        let hashs = ['coming']
        location.hash = hashs
        // $(this).addClass('change').siblings().removeClass('change')
    })
}

export default {
    render
}
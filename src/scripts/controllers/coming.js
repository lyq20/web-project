import movieTpl from '../views/movie.html'
import comingTpl from '../views/coming-list.html'
import moviesModel from '../models/movie'

var datasource2 = []

var compage = 1


const render = async () => {
    $("main").html(movieTpl);

    let coming = datasource2 = (await moviesModel.coming()).data.films
    await renderComing(coming);
    //滚动事件，实现加载更多
    scroll();
    comClick();
}

const renderComing = async (coming) => {
    let comtemplate = Handlebars.compile(comingTpl);
    let comhtml = comtemplate({ coming })
    $('.movies_ul').html(comhtml);
}
const scroll = () => {

    let comScroll = new BScroll('.movie_box', {
        probeType: 2
    })
    comScroll.on('scrollEnd', async function () {
        let y = this.y,
            maxY = y - this.maxScrollY
        if (y <= maxY) {
            let result = await moviesModel.loadmorecom(++compage)
            let coming = datasource2 = [
                ...datasource2,
                ...result.data.films
            ]
            renderComing(coming)
        }
    })
}
const comClick = () => {
    $('.movies_nav>a').eq(0).on('tap', function () {
        let hashs = ['movie']
        location.hash = hashs
        console.log(this)
        // $(this).addClass('change').siblings().removeClass('change')
    })
}
export default {
    render
}
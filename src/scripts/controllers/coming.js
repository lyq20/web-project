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
    movieClick()
}

const renderComing = async (coming) => {
    let comtemplate = Handlebars.compile(comingTpl);
    let comhtml = comtemplate({ coming })
    $('.movies_ul').html(comhtml);
}
const scroll = () => {

    let comScroll = new BScroll('main', {
        probeType: 2
    })
    comScroll.on('scrollEnd', async function () {
        let y = this.y,
            maxY = y - this.maxScrollY
        if (maxY >= 0) {
            let result = await moviesModel.loadmorecom(++compage)
            let coming = datasource2 = [
                ...datasource2,
                ...result.data.films
            ]
            renderComing(coming)
        }
    movieClick()

    })
}
const comClick = ()=>{
    $('.movies_nav>a').eq(0).on('tap',function(){
        let hashs = ['movie']
        location.hash = hashs
        // console.log(this)
        // $(this).addClass('change').siblings().removeClass('change')
    })
}


const movieClick =()=>{
    $('.movie_box>ul>li').on('tap',function(){
        let hashs = ['details']
        let good = {};
        good.id = $(this).attr('data-id')
        let arr = []
        arr.push(good);
        localStorage.setItem("ids", JSON.stringify(arr));
        location.hash = hashs
    })
}
export default {
    render
}
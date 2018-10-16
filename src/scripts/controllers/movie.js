import movieTpl from '../views/movie.html'
import moviesListTpl from '../views/movie-list.html'
import moviesModel from '../models/movie'
import comingTpl from '../views/coming-list.html'
var datasource = []
var datasource2 = []
var moviepage = 1
var compage = 1
//插入
const render = async () => {
    $("main").html(movieTpl);
    let list = datasource = (await moviesModel.list()).data.films
    let coming = datasource2 = (await moviesModel.coming()).data.films
    await renderList(list, coming);
    scrollmovie();
    // scrollcom();
    console.log(list, coming);
    movieClick()
}
const renderList = async (list, coming) => {
    let template = Handlebars.compile(moviesListTpl);
    let html = template({ list })
    $('.movies_ul').html(html);

    //即将上映进行隐藏
    $('.coming_ul').hide();
    let comtemplate = Handlebars.compile(comingTpl);
    let comhtml = comtemplate({ coming })
    $('.coming_ul').html(comhtml);

    //点击事件，通过hide和show来控制ul进行展示数据
    $('.movies_nav a').on("click", function () {
        $(this).addClass("change").siblings().removeClass("change");
        var index = $(this).index();
        console.log(index)
        if (index == 0) {
            console.log("movie")
            $(".movies_ul").show();
            $(".coming_ul").hide();
        }
        else if (index == 1) {
            console.log("coming")
            $(".coming_ul").show();
            $(".movies_ul").hide();
        }
    })
    $('.movies_ul').on('scroll',async function(){
        let y = this.y;
        let maxY = this.maxScrollY - y
        console.log(y,maxY)
        if (maxY >= 0) {
            console.log('scrollmovie')
            let result = await moviesModel.loadmoremovie(++moviepage)
            let list = datasource = [
                ...datasource,
                ...result.data.films
            ]
            renderList(list, coming)
        }
    })
}
const scrollmovie = () => {
    // let movScroll = new BScroll('.movies_ul', {
    //     probeType: 2,
    //     startY: 0
    // })
    
    // console.log(moviesModel.loadmoremovie(2))
}
const scrollcom = () => {
    let comScroll = new BScroll('.coming_ul')
    comScroll.on('scrollEnd', async function () {
        console.log("scrollcom")
        let y = this.y,
            maxY = this.maxScrollY - y
        if (maxY >= 0) {
            let result = await moviesModel.loadmorecom(++compage)
            let coming = datasource2 = [
                ...datasource2,
                ...result.data.films
            ]
            renderList(list, coming)
        }
    })
}


const movieClick =()=>{
    $('.movie_box>ul>li').on('tap',function(){
        // console.log($(this).attr('data-id'))
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
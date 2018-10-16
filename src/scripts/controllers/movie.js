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
    console.log(list, coming);
    movieClick()
}
const renderList = async (list, coming) => {
    let template = Handlebars.compile(moviesListTpl);
    let html = template({ list })
    $('.movies_ul').html(html);
    // scrollmovie();
    // scrollcom();

    $('.coming_ul').hide();
    let comtemplate = Handlebars.compile(comingTpl);
    let comhtml = comtemplate({ coming })
    $('.coming_ul').html(comhtml);


    $('.movies_nav a').on("click", function () {
        console.log($(this).index());
        $(this).addClass("change").siblings().removeClass("change");
        var index = $(this).index();
        if (index == 0) {
            $(".movies_ul").show();
            $(".coming_ul").hide();
        }
        else if (index == 1) {
            $(".coming_ul").show();
            $(".movies_ul").hide();
        }
    })
}
const scrollmovie = () => {
    let posScroll = new BScroll('main')
    posScroll.on('scrollEnd', async function () {
        let y = this.y,
            maxY = this.maxScrollY - y
        if (maxY >= 0) {
            let result = await moviesModel.loadmoremovie(++moviepage)
            let list = datasource = [
                ...datasource,
                ...result.data.films
            ]
            renderList(list)
        }
    })
}
const scrollcom = () => {
    let posScroll = new BScroll('main')
    posScroll.on('scrollEnd', async function () {
        let y = this.y,
            maxY = this.maxScrollY - y
        if (maxY >= 0) {
            let result = await moviesModel.loadmorecom(++compage)
            let coming = datasource2 = [
                ...datasource,
                ...result.data.films
            ]
            renderList(coming)
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
import movieTpl from '../views/movie.html'
import moviesListTpl from '../views/movie-list.html'
import moviesModel from '../models/movie'
// var datasource = []

//插入
const render = async () =>{
    document.querySelector("main").innerHTML = movieTpl;
    let list = (await moviesModel.list()).data.films
    await renderList(list);
    console.log(list);
}
 const renderList = async (list) => {
    let template = Handlebars.compile(moviesListTpl);
    let html = template({ list })
    $('.movies_ul').html(html);
 }
export default {
    render
}
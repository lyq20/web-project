import movieTpl from '../views/movie.html'
import moviesListTpl from '../views/movie-list.html'
const moviesModel =require('../models/movie') 
// var datasource = []
const render = async () =>{
    document.querySelector("main").innerHTML = movieTpl;
    let list = (await moviesModel.list()).data.films
    await renderList(list);
    console.log(list);
    

//     let list = datasource = (await moviesModel.list()).data.films
//   await renderList(list)
//     // let result = await moviesModel.list()
//     // let list = result.data.films
//     console.log(list);
}
 const renderList = async (list) => {
    let template = Handlebars.compile(moviesListTpl);
    let html = template({ list })
    $('.movies_ul').html(html);
 }
export default {
    render
}
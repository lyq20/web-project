import movieTpl from '../views/movie.html'

const render = () =>{
    document.querySelector(".home-container main").innerHTML = movieTpl
}

export default {
    render
}
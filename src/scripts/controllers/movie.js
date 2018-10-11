import movieTpl from '../views/movie.html'

const rander = () =>{
    document.querySelector(".home-container main").innerHTML = movieTpl
}

export default {
    rander
}
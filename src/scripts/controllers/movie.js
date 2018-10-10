import movieTpl from '../views/movie.html'

const render = () =>{
    document.querySelector("#root").innerHTML = movieTpl
}

export default {
    render
}
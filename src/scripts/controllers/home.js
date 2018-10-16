import homeTpl from '../views/home.html'

const render = () =>{
    document.querySelector("#root").innerHTML = homeTpl
    loginClick()

}
const loginClick = ()=>{
    $('header>.right>i').on('tap',function(){
        let hashs = ['login']
        location.hash = hashs
    })
}
export default {
    render
}


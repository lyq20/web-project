import navTpl from '../views/nav.html'

const render = () =>{
    document.querySelector("nav").innerHTML = navTpl
    init()
}

const init = ()=>{
    navEvent()
    Jump()

}
// 点击隐藏显示
const navEvent = ()=>{
    $('header>.left').on('click',()=>{
        $('nav').toggle('linear')
    })
}

// 页面跳转
const Jump = ()=>{
    $('nav li').on("click",function(){
        // console.log($(this).index())
        if($(this).index()==0){
            
        }
    })
}
export default {
    render
}
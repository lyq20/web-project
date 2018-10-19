import navTpl from '../views/aside.html'

const render = () =>{
    $('aside').html(navTpl)
    init()
}

const init = ()=>{
    navEvent()
    Jump();

}
// 点击隐藏显示
const navEvent = ()=>{
    $('header>.left').on('click',()=>{
        $('aside').toggle('linear')
    })
}

// 页面跳转
const Jump = ()=>{
    $('aside li').on("tap",function(){
        let hashs = ['#position','#movie','#cinema','','#login','']
        location.hash = hashs[$(this).index()]
        $('aside').hide()
    })
}


// 页面切换
export default {
    render
}
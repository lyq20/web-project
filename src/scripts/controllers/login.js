import loginTpl from '../views/login.html'

const render = ()=>{
    $('main').html(loginTpl)
    testlogin()
    Submission()
}
// 验证
var bsTop = false
const testlogin = () =>{
    $('.login input').eq(0).on('focus',function(){
        var mobile=$(this).val();
        var re=/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!re.test(mobile)){
            $(this).val("");
            $(this).css({
                color:"#000"
            })
            bsTop = true
        }       
    }).on('blur',function () {
        var mobile=$(this).val();
        var re=/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!re.test(mobile)){
            $(this).val("请输入正确的手机号");
            $(this).css({
                color:"red"
            })
            bsTop = false
        }       
    })

    $('.login input').eq(1).on('focus',function(){
        $(this).val('')
        $(this).css({
            color:"#000"
        })
        bsTop = true
    }).on('blur',function () {
        var Verification=$(this).val();
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
        if (!reg.test(Verification)){
            $(this).val("验证码错误");
            $(this).css({
                color:"red"
            })
            bsTop = false
        }       
    })


}
// 登录提交
const Submission = ()=>{
    $('.login button').on('tap',function(){
        if(!bsTop){
            alert("请正确输入手机号或验证码")
        }else{
            alert('登陆成功')
        }
        
    })
    
}
export default {
    render
}
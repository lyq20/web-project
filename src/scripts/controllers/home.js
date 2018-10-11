const homeTpl = require('../views/home.html')
const rander = ()=>{
    document.querySelector('#root').innerHTML=homeTpl
}
module.exports = {
    rander
}
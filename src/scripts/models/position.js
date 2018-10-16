const list = ()=>{
    return $.ajax({
        url:"v4/api/film/now-playing?__t=1539401039415&page=1&count=5",
        success:(result)=>{
            return result
        }
    })
}
const listbot =()=>{
    return $.ajax({
        url:"v4/api/film/coming-soon?__t=1539408172571&page=1&count=3",
        success:(result)=>{
            return result
        }
    })
}
module.exports ={
    list,
    listbot
}
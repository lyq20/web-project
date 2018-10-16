import detailsTpl from '../views/details.html'
import positionModel from '../models/position'
var str = ''
const render = async () => {
    document.querySelector("main").innerHTML = detailsTpl
    let detailslist = (await positionModel.list()).data.films
    let detailslists = (await positionModel.listbot()).data.films

    let str = JSON.parse(localStorage.getItem("ids"))
    for (var i = 0; i < detailslist.length; i++) {
        if (str[0].id == detailslist[i].id) {
            str = `<img src="${detailslist[i].cover.origin}" alt="">
            <h3>影片简介</h3>
            <ul>
                <li>导 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 演：Siddharth|Malhotra</li>
                <li>主 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 演：拉妮·玛克赫吉 | 内拉吉·卡比 | 萨钦 | 苏普丽雅·皮尔加卡尔 | 侯赛因·达拉尔</li>
                <li>地区语言：印度(印度语)</li>
                <li>类 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 型：剧情|喜剧</li>
                <li>上映日期：${detailslist[i].premiereAt}上映</li>
                <li> 患有抽动秽语综合征的女主人公奈娜。经过无数次面试失败后，终于找到理想的工作，成为了一名中学老师。然而她被指派的班级学生却是全校最顽皮的学生。</li>
            </ul>`
            $('main .details').html(str)
        }
    }
    for (var j = 0; j < detailslists.length; j++) {
        if (str[0].id == detailslists[j].id) {
            str = `<img src="${detailslists[j].cover.origin}" alt="">
            <h3>影片简介</h3>
            <ul>
                <li>导 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 演：Siddharth|Malhotra</li>
                <li>主 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 演：拉妮·玛克赫吉 | 内拉吉·卡比 | 萨钦 | 苏普丽雅·皮尔加卡尔 | 侯赛因·达拉尔</li>
                <li>地区语言：印度(印度语)</li>
                <li>类 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 型：剧情|喜剧</li>
                <li>上映日期：${detailslists[j].premiereAt}上映</li>
                <li> 患有抽动秽语综合征的女主人公奈娜。经过无数次面试失败后，终于找到理想的工作，成为了一名中学老师。然而她被指派的班级学生却是全校最顽皮的学生。</li>
            </ul>`
            $('main .details').html(str)
        }
    }





}



export default {
    render
}
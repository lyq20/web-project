const list = () => {
    return $.ajax({
        url: '/v4/api/film/now-playing?page=1&count=7',
        success: function (result) {
            return result
        }
    })
}
const coming = () => {
    return $.ajax({
        url: '/v4/api/film/coming-soon?page=1&count=7',
        success: function (result) {
            return result
        }
    })
}
const loadmoremovie = (page) => {
    return $.ajax({
        url: '/v4/api/film/now-playing?page=' + page + '&count=7',
        success: (result) => {
            return result
        }
    })
}
const loadmorecom = (page) => {
    return $.ajax({
        url: '/v4/api/film/now-playing?page=' + page + '&count=7',
        success: (result) => {
            return result
        }
    })
}
export default {
    list,
    coming,
    loadmoremovie,
    loadmorecom
}
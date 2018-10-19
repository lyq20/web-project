const theatre = (id) => {
    return $.ajax({
        url: '/v4/api/cinema/' + id,
        success: (result) => {
            return result
        }
    })
}

export default {
    theatre
}
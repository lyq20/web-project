const district = () => {
  return $.ajax({
    url: '/city/district',
    success: (result) => {
      return result
    }
  })
}

const cinemaList = () => {
  return $.ajax({
    url: '/v4/api/cinema',
    success: (result) => {
      return result
    }
  })
}
  
export default {
    district,
    cinemaList
}
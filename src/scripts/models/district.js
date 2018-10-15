const district = () => {
    return $.ajax({
      url: '/v4/city/district',
      success: (result) => {
        return result
      }
    })
  }
  
export default {
    district
}
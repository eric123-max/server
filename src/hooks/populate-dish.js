// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (_options = {}) => {
  return async context => {
    const responseData = context.result.data
    //console.log(responseData)
    const dishesService = context.app.services.dishes
    //console.log(dishesService)

    for (var ii = 0; ii < responseData.length; ii++) {
      var item = responseData[ii]
      //  console.log("1234567",item)
      var myBdishIds = item.breakfast 

      const arr = []

      for (var aa = 0; aa < myBdishIds.length; aa++) {
        var br = myBdishIds[aa]
        //  console.log("000",br)
        var breakfast = await dishesService.get(
          br, context.params
        )

      
        console.log("12345",breakfast)

        arr.push(breakfast)
        console.log(arr)

      }
      



      // var allBreakfast = breakfast.filter(function(item){
      // return item.date === 'Monday'
      //  })

      //  console.log("11122", allBreakfast)
      // var arr = []
      // arr.push(breakfast)
      // console.log("555",arr)

        
        // var arr = []
        // arr.push(breakfast, breakfast, breakfast)
        // console.log("333",arr)



      // add the object into an array
      
      // var arr = []
      //  arr.push(breakfast._id='6119f3cd53ef9604f55afe23', breakfast._id="6119f4a253ef9604f55afe25", breakfast._id='6119f4d253ef9604f55afe27' )
      // console.log("222", arr)

        // const newBreakfast =  item.breakfast.push(breakfast)
        // console.log("222", breakfast )

        // const objects = [breakfast]
        // const b1 = objects.find(function(item){
        //   return item._id ==='6119f3cd53ef9604f55afe23'
        // })
        // console.log("1",b1)

      item.breakfast = breakfast



      // var myLdishId = item.lunch
      // console.log("lunch",myLdishId)
      // var myDdishId = item.dinner
      // console.log("dinner",myDdishId)
      // var mySdishId = item.snack
      // console.log("snack",mySdishId)

     

      // var lunch = await dishesService.get(myLdishId, context.params)
      // console.log(lunch)

      // var dinner = await dishesService.get(myDdishId, context.params)
      // console.log(dinner)

      // var snack = await dishesService.get(mySdishId, context.params)
      // console.log(snack)

     
      // item.lunch = lunch
      // item.dinner = dinner
      // item.snack = snack
    }
    return context;
  };
};
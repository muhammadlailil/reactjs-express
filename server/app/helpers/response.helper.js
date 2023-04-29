export default {
     Success: (data, res) => {
          return res.status(200).json({
               status: 200,
               message: 'Success',
               data: data
          })
     },


     Message: (message, res) => {
          return res.status(200).json({
               status: 200,
               message
          })
     },

     BadRequest: (message, res) => {
          return res.status(400).json({
               status: 400,
               error: "Bad Request",
               message: message
          })
     },

     InvalidRequest: (message, validate, res) => {
          return res.status(422).json({
               status: 422,
               error: "Unprocessable Entity",
               message,
               validate
          })
     }
}
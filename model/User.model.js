

const mongoose = require("mongoose")





const userSchema = mongoose.Schema({
    
      email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        min: 6,
      },
      role: {
        type: String,
        required: true,
        
      },
    
      
    

},
{ timestamps: true }
)

const User = mongoose.model("user", userSchema)
module.exports = {
    User
}


// {
//     "lastName": "gpaa",
//     "firstName": "gpaa",
//     "password": "gpaa",
//     "email": "gpaa@gmial.com",
//     "avatar": "ass",
//     "coverimg": "ass",
//     "post": [
//         {
//             "post_image": "ass",
//             "description": "dsa",
//             "like": 1,
//             "all_comment": [
//                 {
//                     "userId": "ass",
//                     "comment": "good"
//                 }
//             ]
//         }
//     ]
// }
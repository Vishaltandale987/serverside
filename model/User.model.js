

const mongoose = require("mongoose")





const userSchema = mongoose.Schema({
    
 
  username: {
    type: String,
    require: true,
    min: 3,
    max: 20,
    unique: true,
  },
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
    default: "",
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
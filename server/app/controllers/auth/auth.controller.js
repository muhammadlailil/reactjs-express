import responseHelper from "../../helpers/response.helper.js"
import usersService from "../../services/users.service.js"
import * as bcrypt from 'bcrypt';

export default {

     register: async (req, res, next) => {
          try {

               const { email, password } = req.body

               if (await usersService.findByEmail(email)) return responseHelper.BadRequest("Email sudah terdaftar", res)

               await usersService.create({ email, password })
               return responseHelper.Message("Berhasil melakukan registrasi", res)

          } catch (err) {
               next(err)
          }
     },

     login: async (req, res,next) => {
          try {

               const { email, password } = req.body
               const user = await usersService.findByEmail(email)

               if (!user) return responseHelper.BadRequest("Email tersebut belum terdaftar", res)
               if (!bcrypt.compareSync(password, user.password)) return responseHelper.BadRequest("Password yang Anda masukkan tidak sesuai", res)


               return responseHelper.Success({
                    _id: user._id,
                    email: user.email
               }, res)

          }catch(err){
               next(err)
          }
     }
}
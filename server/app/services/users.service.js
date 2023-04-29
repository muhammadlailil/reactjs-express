import usersEntity from "../entity/users.entity.js"
import * as bcrypt from 'bcrypt';

async function create({ ...raw }) {
     return await new usersEntity({
          email: raw.email,
          password: bcrypt.hashSync(raw.password, 10)
     }).save()   
}

async function findByEmail(email) {
     return await usersEntity.findOne({ email })
}

async function all() {
     return await usersEntity.find()
}


export default {
     create,
     findByEmail,
     all
}
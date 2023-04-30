// import request from "supertest";
// import app from "../../app/bootstrap.js"
import request from "../helpers/request.js";
import strings from "../helpers/strings.js";

describe('POST /auth/login', () => {
     it('should return success when credential valid', async () => {
          await request.post({
               url: '/auth/login',
               body: {
                    email: 'laililmahvut@gmail.com',
                    password: 'P@ssw0rd',
               },
               expect: 200
          })
     })

     it('should return error when credential is invalid', async () => {
          await request.post({
               url: '/auth/login',
               body: {
                    email: 'example@gmail.com',
                    password: 'P@ssw0rd',
               },
               expect: 400
          })
     })
})

describe('POST /auth/register', () => {
     it('should return success when parameter valid', async () => {
          await request.post({
               url: '/auth/register',
               body: {
                    email: `${strings.randomString(6)}@gmail.com`,
                    password: 'P@ssw0rd',
               },
               expect: 200
          })
     })

     it('should return error when parameter is invalid', async () => {
          await request.post({
               url: '/auth/register',
               body: {
                    email: '_testing',
                    password: '123456',
               },
               expect: 422
          })
     })
})
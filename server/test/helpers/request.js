import request from "supertest";
import app from "../../app/bootstrap.js"

export default {
     post: async (attr) => {
          return await request(app)
               .post(attr.url)
               .send(attr.body)
               .expect('Content-Type', /json/)
               .expect(attr.expect)
     },

     get: async (attr) => {
          return await request(app)
               .get(attr.url)
               .expect('Content-Type', /json/)
               .expect(attr.expect)
     },

     delete: async (attr) => {
          return await request(app)
               .delete(attr.url)
               .expect('Content-Type', /json/)
               .expect(attr.expect)
     }
}
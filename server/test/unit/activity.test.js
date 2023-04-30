import request from "../helpers/request"

describe('GET /activity', () => {
     it('should return list of activities', async () => {
          const activities = await request.get({
               url: '/activity',
               expect: 200
          })
          expect(activities.body).toHaveProperty('data[0]')
     })
})

describe('POST /activity/create', () => {
     it('should return success when all parameter is valid', async () => {
          await request.post({
               url: '/activity/create',
               body: {
                    "name": "- Testing Activity",
                    "date": "2023-04-29",
                    "start_time": "16:00",
                    "end_time": "20:00"
               },
               expect: 200
          })
     })

     it('should return error when parameter is invalid', async () => {
          await request.post({
               url: '/activity/create',
               body: {
                    name : null
               },
               expect: 422
          })
     })
})

describe('POST /activity/update/:id', () => {
     it('should return success when all parameter is valid', async () => {
          await request.post({
               url: '/activity/update/644d3c12302d867d4854aece',
               body: {
                    "name": "- Testing Activity Edited",
                    "date": "2023-04-29",
                    "start_time": "16:00",
                    "end_time": "20:00"
               },
               expect: 200
          })
     })

     it('should return error when parameter is invalid', async () => {
          await request.post({
               url: '/activity/update/644d3c12302d867d4854aece',
               body : {
                    name : null
               },
               expect: 422
          })
     })
})

describe('DELETE /activity/:id', () => {
     it('should return success when have a valid id', async () => {
          await request.delete({
               url: '/activity/644d3dbee07c473a7a6b3a50',
               expect: 200
          })
     })

     it('should return error when id is invalid', async () => {
          await request.delete({
               url: '/activity/08fktnf2tkimgi7ek0ikses540',
               expect: 400
          })
     })
})
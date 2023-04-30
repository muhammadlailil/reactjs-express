import request from "../helpers/request"

describe('GET /calendar/events', () => {
     it('should return list of events', async () => {
          const activities = await request.get({
               url: '/calendar/events',
               expect: 200
          })
          expect(activities.body).toHaveProperty('data[0]')
     })
})


describe('POST /calendar/events/create', () => {
     it('should return success when create new event', async () => {
          await request.post({
               url: '/calendar/events/create',
               body: {
                    "summary": "Testing Event",
                    "location": "zomm meet",
                    "description": "url zoom met",
                    "start": {
                         "dateTime": "2023-05-02T09:00:00-07:00",
                         "timeZone": "Asia/Jakarta"
                    },
                    "end": {
                         "dateTime": "2023-05-02T17:00:00-07:00",
                         "timeZone": "Asia/Jakarta"
                    }
               },
               expect: 200
          })
     })
})

describe('POST /calendar/events/update/:id', () => {
     it('should return success when update event', async () => {
          await request.post({
               url: '/calendar/events/update/l3eqsqp980hgdhc4fpino3p3h0',
               body: {
                    "summary": "Testing Edited Event Sample",
                    "location": "zomm meet",
                    "description": "url zoom met",
                    "start": {
                         "dateTime": "2023-05-02T09:00:00-07:00",
                         "timeZone": "Asia/Jakarta"
                    },
                    "end": {
                         "dateTime": "2023-05-02T17:00:00-07:00",
                         "timeZone": "Asia/Jakarta"
                    }
               },
               expect: 200
          })
     })
})


describe('POST /calendar/events/invite/:id', () => {
     it('should return success when have a valid id', async () => {
          await request.post({
               url: '/calendar/events/invite/3kjqbrgevr8f6ob466s9a7v36c',
               body : {
                    "emails" : [
                         "laililmahvut@gmail.com"
                     ]
               },
               expect: 200
          })
     })

})

describe('DELETE /calendar/events/:id', () => {
     it('should return success when event deleted', async () => {
          await request.delete({
               url: '/calendar/events/08fktnf2tkimgi7ek0ikses540',
               expect: 200
          })
     })
})
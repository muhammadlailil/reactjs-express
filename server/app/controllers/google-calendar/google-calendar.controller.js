import googleCalendar from "../../libs/google-calendar.js"
import responseHelper from "../../helpers/response.helper.js"

export default {
     list: async (req, res, next) => {
          try {
               const listEvents = await googleCalendar.listEvents()
               return responseHelper.Success(listEvents, res)
          } catch (err) {
               next(err)
          }
     },

     create: async (req, res, next) => {
          try {
               googleCalendar.createEvent(req.body)
               return responseHelper.Message('Event berhasil ditambahkan', res)
          } catch (err) {
               next(err)
          }
     },

     update: async (req, res, next) => {
          try {
               const { id } = req.params;
               googleCalendar.updateEvent(req.body, id)
               return responseHelper.Message('Event berhasil diperbarui', res)
          } catch (err) {
               next(err)
          }
     },


     delete: async (req, res, next) => {
          try {
               const { id } = req.params;
               googleCalendar.deleteEvent(id)
               return responseHelper.Message('Event berhasil dihapus', res)
          } catch (err) {
               next(err)
          }
     },

     invite: async (req, res, next) => {
          try {
               const { id } = req.params;
               const { emails } = req.body
               await googleCalendar.invite(emails, id)

               return responseHelper.Message("Success invite kedalam event", res)
          } catch (err) {
               next(err)
          }
     },
}
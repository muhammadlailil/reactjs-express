import responseHelper from "../../helpers/response.helper.js"
import activityService from "../../services/activity.service.js"

export default {
     list: async (req, res, next) => {
          try {
               const activities = await activityService.all()
               return responseHelper.Success(activities, res)
          } catch (err) {
               next(err)
          }
     },

     create: async (req, res, next) => {
          try {
               const { name, date, start_time, end_time } = req.body

               const activity = await activityService.create({ name, date, start_time, end_time })

               return responseHelper.Success(activityService.readable(activity), res)
          } catch (err) {
               next(err)
          }
     },

     update: async (req, res, next) => {
          try {
               const { id } = req.params;
               const { name, date, start_time, end_time } = req.body

               await activityService.updateById({ name, date, start_time, end_time }, id)
               const activity = await activityService.findById(id)

               return responseHelper.Success(activityService.readable(activity), res)
          } catch (err) {
               next(err)
          }
     },

     delete: async (req, res, next) => {
          const { id } = req.params;
          if(await activityService.deleteBy(id)) return responseHelper.Message('Data berhasil dihapus',res);

          return responseHelper.BadRequest('Data tidak ditemukan',res);
     },
}
import activityEntity from "../entity/activity.entity.js"
import stringsHelper from "../helpers/strings.helper.js"

async function create({ ...raw }) {
     return await new activityEntity({
          name: raw.name,
          date: raw.date,
          start_time: raw.start_time,
          end_time: raw.end_time,
     }).save()
}

async function updateById({ ...raw },id) {
     return await activityEntity.findByIdAndUpdate({
          _id : id
     },{
          name: raw.name,
          date: raw.date,
          start_time: raw.start_time,
          end_time: raw.end_time,
     },{new: false})
}

async function findById(id) {
     return await activityEntity.findOne({
          _id : id
     })
}


async function deleteBy(id) {
     return await activityEntity.deleteOne({
          _id : id
     })
}

async function all() {
     const activities = await activityEntity.find()
     return activities.map((activity) => {
          return readable(activity)
     })
}

function readable(activity) {
     return {
          _id: activity._id,
          name: activity.name,
          date: stringsHelper.ymdDateFormat(activity.date),
          start_time: activity.start_time,
          end_time: activity.end_time,
          status: stringsHelper.activityStatus(activity)
     }
}

export default {
     create,
     all,
     updateById,
     findById,
     deleteBy,
     readable
}
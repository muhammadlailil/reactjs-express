function ymdDateFormat(date = new Date()) {
     date = new Date(date)
     let month = (date.getMonth() + 1),
          day = date.getDate(),
          year = date.getFullYear();

     month = month.toString().padStart(2, '0')
     day = day.toString().padStart(2, '0')

     return [year, month, day].join('-');
}

function getCurrentTime() {
     var today = new Date(),
          h = today.getHours(),
          m = today.getMinutes();
     h = h.toString().padStart(2, '0')
     m = m.toString().padStart(2, '0')

     return `${h}:${m}`
}

export default {
     ymdDateFormat,
     getCurrentTime,
     activityStatus: (activity) => {
          const date = ymdDateFormat(activity.date)
          const startTime = activity.start_time;
          const endTime = activity.end_time;
          const currentDate = ymdDateFormat()
          const currentTime = getCurrentTime()

        
          const progress = (currentDate == date && currentTime >= startTime  && currentTime <= endTime)
          if (progress) return "Sedang Dilaksanakan";

          const done = (currentDate == date && currentTime > endTime)
          if (currentDate > date || done) return "Telah Dilaksanakan";

          const waiting = (currentDate == date && currentTime < startTime);
          if (currentDate < date || waiting) return "Belum Dilaksanakan";


          return null;
     }
}
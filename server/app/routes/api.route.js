import activityController from "../controllers/activity/activity.controller.js"
import authController from "../controllers/auth/auth.controller.js"
import googleCalendarController from "../controllers/google-calendar/google-calendar.controller.js"
import activityRequest from "../request/activity.request.js"
import authRequest from "../request/auth.request.js"

Route.post('/auth/register', authRequest.register, authController.register)
Route.post('/auth/login', authRequest.login, authController.login)

Route.get('/activity', activityController.list)
Route.post('/activity/create', activityRequest.create, activityController.create)
Route.post('/activity/update/:id', activityRequest.update, activityController.update)
Route.delete('/activity/:id', activityController.delete)


Route.get('/calendar/events', googleCalendarController.list)
Route.post('/calendar/events/create', googleCalendarController.create)
Route.post('/calendar/events/update/:id', googleCalendarController.update)
Route.delete('/calendar/events/:id', googleCalendarController.delete)
Route.post('/calendar/events/invite/:id', googleCalendarController.invite)

export default Route
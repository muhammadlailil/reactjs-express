import { google } from "googleapis";

function auth() {
     const { client_secret, client_id, refresh_token, credential } = _config.googleCalendar;
     const oAuth2Client = new google.auth.OAuth2(client_id, client_secret);
     oAuth2Client.setCredentials(credential)
     return oAuth2Client;
}
function calendar() {
     return google.calendar({ version: 'v3', auth: auth() })
}


async function findById(id) {
     return await calendar().events.get({
          auth: auth(),
          calendarId: 'primary',
          eventId: id,
     });
}
export default {
     calendar,
     listEvents: async (limit = 10) => {
          const res = await calendar().events.list({
               calendarId: 'primary',
               timeMin: new Date().toISOString(),
               maxResults: limit,
               singleEvents: true,
               orderBy: 'startTime',
          });
          return res.data.items?.map((row) => {
               return {
                    id: row.id,
                    summary: row.summary,
                    start: row.start,
                    end: row.end,
                    location: row.location || null,
                    description: row.description || null,
                    attendees: row.attendees || null,
               }
          });
     },

     createEvent: (event) => {

          return calendar().events.insert({
               auth: auth(),
               calendarId: 'primary',
               resource: event,
          }, (err, event) => {
               if (err) console.log(err)
          });
     },

     updateEvent: (event, id) => {

          return calendar().events.update({
               auth: auth(),
               calendarId: 'primary',
               eventId: id,
               resource: event,
          }, (err, event) => {
               if (err) console.log(err)
          });
     },

     deleteEvent: (id) => {

          return calendar().events.delete({
               auth: auth(),
               calendarId: 'primary',
               eventId: id,
          }, (err, event) => {
               if (err) console.log(err)
          });
     },

     invite: async (emails, id) => {
          const eventObject = await findById(id)
          emails = emails?.map((email) => {
               return {
                    email: email
               }
          }) ?? []

          let event = {
               ...eventObject.data,
               ...{
                    attendees: emails
               }
          }
          return calendar().events.update({
               auth: auth(),
               calendarId: 'primary',
               eventId: id,
               resource: event,
          }, (err, event) => {
               if (err) console.log(err)
          });
     },
}
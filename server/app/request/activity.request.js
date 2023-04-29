import validationHelper from "../helpers/validation.helper.js";

export default {
     create: (req, res, next) => {
          const rules = {
               name: 'required|min:3|max:100',
               date: 'required|date|regex:/^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$/',
               start_time: 'required|regex:/^([0-9][0-9]):([0-9][0-9])$/',
               end_time: 'required|regex:/^([0-9][0-9]):([0-9][0-9])$/',
          }
          if (validationHelper.valid(req.body, rules, res)) {
               next();
          }
     },

     update: (req, res, next) => {
          const rules = {
               name: 'required|min:3|max:100',
               date: 'required|date|regex:/^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$/',
               start_time: 'required|regex:/^([0-9][0-9]):([0-9][0-9])$/',
               end_time: 'required|regex:/^([0-9][0-9]):([0-9][0-9])$/',
          }
          if (validationHelper.valid(req.body, rules, res)) {
               next();
          }
     },
}
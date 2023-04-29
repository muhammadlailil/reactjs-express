import validationHelper from "../helpers/validation.helper.js";

export default {
     register: (req, res, next) => {
          const rules = {
               email: 'required|email',
               password: 'required|min:8|regex:/^.*(?=.{3,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/',
          }
          if (validationHelper.valid(req.body, rules, res)) {
               next();
          }
     },

     login: (req, res, next) => {
          const rules = {
               email: 'required|email',
               password: 'required|min:8|regex:/^.*(?=.{3,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/',
          }
          if (validationHelper.valid(req.body, rules, res)) {
               next();
          }
     }
}
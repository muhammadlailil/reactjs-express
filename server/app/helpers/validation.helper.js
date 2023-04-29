import Validator from 'validatorjs';
import responseHelper from './response.helper.js';

export default {
     valid : (data, rules, res) => {
          const valid = new Validator(data, rules)
          if (valid.fails()) {
               var error = valid.errors.all();
               for (var key in error) {}
               responseHelper.InvalidRequest(error[key][0], error, res)
               return false;
          }
          return true;
     }
}
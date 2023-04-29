import mongoose from "mongoose";

export default {
     connect: () => {
          mongoose.connect(_config.db.url, _config.db.option);
     }
}
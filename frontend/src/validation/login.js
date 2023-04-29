export default function loginValidation(form, callback) {
     let err = null;
     if (form.email == "")
          err = { ...err, ...{ email: "Email wajib disisi" } };
     if (form.password == "")
          err = { ...err, ...{ password: "Password wajib disisi" } };
     if (
          form.email &&
          !form.email?.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
     )
          err = { ...err, ...{ email: "Format email tidak sesuai" } };

     if (
          form.password &&
          !form.password?.match(/^.*(?=.{3,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/)
     )
          err = { ...err, ...{ password: "Format password tidak sesuai" } };

          
     if (
          form.password &&
          form.password?.length < 6
     )
          err = { ...err, ...{ password: "Password minimal 8 karakter" } };

     callback(err)

     if (!err) return true;
     return false;
}
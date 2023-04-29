import AppLogo from "@/components/AppLogo";
import TextInput from "@/components/Input/TextInput";
import FacebookIcon from "@/components/Svg/FacebookIcon";
import GoogleIcon from "@/components/Svg/GoogleIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";
import loginValidation from "@/validation/login";
import Api from "@/libs/api";
import { useAuth } from "@/hooks/auth";

export default function Home() {
     const router = useRouter();
     const { setUser } = useAuth({
          middleware: "guest",
          redirectIfAuthenticated: "/dashboard",
          router,
     });

     const [alert, setAlert] = useState(null);
     const [form, setForm] = useState({
          email: "",
          password: "",
     });
     const [error, setError] = useState({
          email: "",
          password: "",
     });

     const handleFormChange = (event) => {
          const { name, value } = event.target;
          setForm({
               ...form,
               [name]: value,
          });
          setError({
               ...error,
               [name]: "",
          });
     };
     const toggleAlert = (msg) => {
          setAlert(msg);
          setTimeout(() => {
               setAlert(null);
          }, 2500);
     };
     const login = async (e) => {
          e.preventDefault();
          const valid = loginValidation(form, (err) => {
               if (err) setError(err);
          });

          if (valid) {
               new Api("/auth/login")
                    .post(form)
                    .then((resp) => {
                         setUser(resp.data);
                         router.push("/dashboard");
                    })
                    .catch((err) => {
                         toggleAlert(err.message);
                    });
          }
     };
     return (
          <>
               <Head>
                    <title>Login</title>
               </Head>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full">
                    <div className="md:bg-[#E12F39] md:bg-auth-pattern bg-cover md:bg-contain bg-bottom bg-no-repeat relative bg-auth-m-pattern md:h-auto h-[250px]">
                         <div className="z-10 md:absolute lg:absolute p-7 lg:pt-14 md:p-10 lg:p-20">
                              <AppLogo className="w-[120px] lg:w-[167px]" />
                              <h1 className="font-roboto-bold text-white text-[25px] md:text-[30px] lg:text-[49px] mt-3 lg:mt-5">
                                   Enjoy the Convenience of <br />
                                   Beam Space Storage
                              </h1>
                         </div>
                    </div>

                    <div className="flex justify-center items-center">
                         <div className="w-full p-7 md:w-[80%] lg:w-[65%]">
                              <h1 className="text-[#EB2730] text-[30px] lg:text-[44px] mb-7">
                                   Log in to Beam Space
                              </h1>
                              <button className="w-full flex items-center justify-center rounded-xl shadow-button p-2 lg:p-3 text-dark-label text-[18px] lg:text-[21px] mb-5">
                                   <GoogleIcon className="me-3" />
                                   Log in with Google
                              </button>
                              <button className="w-full flex items-center justify-center rounded-xl shadow-blue-button bg-[#3A589B] p-2 lg:p-3 text-white text-[18px] lg:text-[21px] mb-10">
                                   <FacebookIcon className="me-3" />
                                   Log in with Facebook
                              </button>
                              <div className="flex justify-center bg-[#E5E5E5] w-full h-[1px] text-[#B1B1B1] text-[18px] lg:text-[21px] font-roboto">
                                   <span className="bg-[#fff] inline-block mt-[-5px]">
                                        or login with your email
                                   </span>
                              </div>
                              <form
                                   action=""
                                   method="post"
                                   className="mt-16 block"
                                   onSubmit={(e) => login(e)}
                              >
                                   {alert ? (
                                        <div className="bg-[#d99f61] p-3 rounded-xl text-center font-roboto w-full mb-5 text-white">
                                             {alert}
                                        </div>
                                   ) : (
                                        <></>
                                   )}

                                   <TextInput
                                        type="text"
                                        label="Email Address"
                                        required
                                        name="email"
                                        placeholder="E.g, name@email.com"
                                        value={form.email}
                                        error={error.email}
                                        onChange={(e) => handleFormChange(e)}
                                   />
                                   <TextInput
                                        type="password"
                                        label="Password"
                                        required
                                        name="password"
                                        placeholder="Enter your password"
                                        value={form.password}
                                        error={error.password}
                                        onChange={(e) => handleFormChange(e)}
                                   />
                                   <button className="w-full flex items-center justify-center rounded-xl shadow-red-button bg-[#EB2730] p-2 lg:p-3 text-white text-[18px] lg:text-[21px] mb-10 mt-10">
                                        Login
                                   </button>
                              </form>
                              <div className="text-center text-[18px] lg:text-[21px] text-dark-label">
                                   <Link href="/" className="text-[#00ACEE]">
                                        Forgot Password?
                                   </Link>
                                   <p className="mt-3">
                                        Don't have an account? &nbsp;
                                        <Link
                                             href="/"
                                             className="text-[#00ACEE]"
                                        >
                                             Create an account
                                        </Link>
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}

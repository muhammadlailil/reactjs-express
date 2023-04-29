import { useAuth } from "@/hooks/auth";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Dashboard() {
     const router = useRouter();
     const { user, logout } = useAuth({
          middleware: "auth",
          router,
     });
     return (
          <>
               <Head>
                    <title>Dashboard</title>
               </Head>
               <div className="h-full bg-[#E12F39] bg-no-repeat bg-bottom flex p-14 text-white flex-col items-center justify-center">
                    <h1 className="text-[40px] font-roboto-bold">
                         Welcome Back !
                    </h1>
                    <h1 className="text-[40px] font-roboto">
                         {user?.email}
                    </h1>
                    <button
                         onClick={() => logout()}
                         className="bg-white flex items-center justify-center rounded-xl shadow-button md:ps-10 md:pr-10 p-2 md:p-3  text-dark-label text-[18px] lg:text-[21px] mt-5"
                    >
                         Logout
                    </button>
               </div>
          </>
     );
}

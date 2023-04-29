import "@/styles/globals.css";
import Clsx from "@/libs/clsx";
import { Roboto } from "next/font/google";

const robotoBold = Roboto({
     weight: "700",
     subsets: ["latin"],
     variable: "--roboto-bold",
});

const robotoRegular = Roboto({
     weight: "500",
     subsets: ["latin"],
     variable: "--roboto-regular",
});

const roboto = Roboto({
     weight: "400",
     subsets: ["latin"],
     variable: "--roboto",
});

export default function App({ Component, pageProps }) {
     return (
          <div
               className={Clsx(
                    robotoBold.variable,
                    robotoRegular.variable,
                    roboto.variable,
                    "h-full font-roboto-regular"
               )}
          >
               <Component {...pageProps} />
          </div>
     );
}

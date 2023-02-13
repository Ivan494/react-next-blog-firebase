import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Toaster} from 'react-hot-toast';
import { UserContext } from "../lib/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <UserContext.Provider value={{user:{},username:'jeff'}}>
    <Navbar />
      <Component {...pageProps} />
      <Toaster/>
    </UserContext.Provider>
    </>
  );
}

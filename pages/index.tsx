import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import Loader from "../components/Loader";

const inter = Inter({ subsets: ["latin"] });

import toast from 'react-hot-toast'

export default function Home() {
  return (
    <>
{/*       <Link
        prefetch={false}
        href={{
          pathname: "/[username]",
          query: { username: "johndoe" },
        }}
      >
        Profile page
      </Link>
      <Loader show/> */}
      <button onClick={() => toast.success('Success!')}>Success</button>
    </>
  );
}

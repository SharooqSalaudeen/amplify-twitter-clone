import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

import checkUser from "../helpers/checkUser";

//Amplify ------------------------------
import Amplify, { Auth, Hub, DataStore, Predicates } from "aws-amplify";
import { withSSRContext } from "aws-amplify";
import "../configureAmplify";

export async function getServerSideProps(context) {
  const SSR = withSSRContext(context);

  try {
    const user = await SSR.Auth.currentAuthenticatedUser();
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  } catch (err) {
    console.log("server", err);
    return {
      props: {},
    };
  }
}

export default function Main() {
  const router = useRouter();
  const user = checkUser();

  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user]);

  return (
    <div className="">
      <Head>
        <title>Login / Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SignIn /> */}

      <div className="flex flex-col items-center space-y-20 pt-48 bg-black h-screen">
        <Image src="https://rb.gy/ogau5a" width={150} height={150} objectFit="contain" />

        <div>
          <div>
            <button
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              onClick={() => {
                try {
                  Auth.federatedSignIn({ provider: "Google" });
                } catch (err) {
                  console.log("error", err);
                }
              }}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Sign in with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Modal from "../components/Modal";
import { modalState, userState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

import Amplify, { Auth, Hub, DataStore, Predicates, withSSRContext } from "aws-amplify";
import "../configureAmplify";

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then((res) => res.json());
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then((res) => res.json());
  const SSR = withSSRContext(context);

  try {
    const user = await SSR.Auth.currentAuthenticatedUser();
    return {
      props: {
        trendingResults,
        followResults,
        user: user.attributes,
        authenticated: true,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default function Home({ trendingResults, followResults, authenticated, user }) {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  console.log("user", user);

  return (
    <div className="">
      <Head>
        <title>Login / Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar user={user} />
        <Feed />
        <Widgets trendingResults={trendingResults} followResults={followResults} />

        {isOpen && <Modal />}
      </main>
    </div>
  );
}

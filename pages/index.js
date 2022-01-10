import { useState, useEffect } from "react";
import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
// import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

//Amplify ------------------------------
import Amplify, { Auth, Hub, DataStore, Predicates } from "aws-amplify";
import { Post, PostStatus } from "../src/models";
import awsconfig from "../src/aws-exports";
import SignIn from "../components/SignIn";
Amplify.configure(awsconfig);

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then((res) => res.json());
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then((res) => res.json());
  // const providers = await getProviders();
  // const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      // providers,
      // session,
    },
  };
}

export default function Home({ trendingResults, followResults, providers }) {
  // const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  // if (!session) return <Login providers={providers} />;

  /* DataStore test ------------------------ */
  function onCreate() {
    DataStore.save(
      new Post({
        title: `New title ${Date.now()}`,
        status: PostStatus.PUBLISHED,
      })
    );
  }

  function onDeleteAll() {
    DataStore.delete(Post, Predicates.ALL);
  }

  async function onQuery() {
    const posts = await DataStore.query(Post, (c) => c.rating("gt", 4));
    console.log(posts);
  }

  // useEffect(() => {
  //   const subscription = DataStore.observe(Post).subscribe((msg) => {
  //     console.log("Post subscription", msg.model, msg.opType, msg.element);
  //   });

  //   return () => subscription.unsubscribe();
  // }, []);

  /* DataStore test end ------------------------ */

  return (
    <div className="">
      <Head>
        <title>Home / Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignIn />

      {/* DataStore test ------------------------ */}
      <div>
        <input type="button" value="NEW" onClick={onCreate} />
        <input type="button" value="DELETE ALL" onClick={onDeleteAll} />
        <input type="button" value="QUERY rating > 4" onClick={onQuery} />
      </div>
      {/* DataStore test end ------------------------ */}

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets trendingResults={trendingResults} followResults={followResults} />

        {isOpen && <Modal />}
      </main>
    </div>
  );
}

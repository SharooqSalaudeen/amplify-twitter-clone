import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Post from "../components/Post";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import Comment from "../components/Comment";
import Head from "next/head";

import { withSSRContext } from "aws-amplify";
import "../configureAmplify";
import { GeneralContext } from "../store";

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

function PostPage({ trendingResults, followResults, user }) {
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const { modelStateOpen } = useContext(GeneralContext);
  const router = useRouter();
  const { id } = router.query;

  useEffect(async () => {
    // const _post = await DataStore.query(PostModel, (post) => post.id("eq", id));
    // setPost(_post[0]);
  }, []);

  useEffect(async () => {
    // if (post) {
    //   const _author = await DataStore.query(UserModel, (user) => user.id("eq", post?.userID));
    //   setAuthor(_author[0]);
    // }
  }, [post]);

  // useEffect(
  //   () =>
  //     onSnapshot(query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc")), (snapshot) =>
  //       setComments(snapshot.docs)
  //     ),
  //   [db, id]
  // );

  return (
    <div>
      <Head>
        <title>
          {author?.name} on Twitter: &apos;{post?.content}&apos;
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar user={user} />
        <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
          <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
            <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0" onClick={() => router.push("/home")}>
              <ArrowLeftIcon className="h-5 text-white" />
            </div>
            Tweet
          </div>
          <Post id={id} post={post} postPage />
          {comments.length > 0 && (
            <div className="pb-72">
              {comments.map((comment) => (
                <Comment key={comment.id} id={comment.id} comment={comment.data()} />
              ))}
            </div>
          )}
        </div>
        <Widgets trendingResults={trendingResults} followResults={followResults} />

        {modelStateOpen && <Modal />}
      </main>
    </div>
  );
}

export default PostPage;

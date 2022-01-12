import Amplify, { DataStore, Predicates, SortDirection } from "aws-amplify";
import { Post, PostStatus } from "../src/models";

import { SparklesIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
// import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
// import { db } from "../firebase";
import PostComponent from "./Post";
// import { useSession } from "next-auth/react";

function Feed() {
  // const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  // console.log("posts", posts);

  // useEffect(async () => {
  //   try {
  //     const _posts = await DataStore.query(Post);
  //     setPosts(_posts);
  //     console.log("Posts retrieved successfully!", JSON.stringify(posts, null, 2));
  //   } catch (error) {
  //     console.log("Error retrieving posts", error);
  //   }
  // }, []);

  useEffect(() => {
    const subscription = DataStore.observeQuery(Post, Predicates.ALL, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING),
    }).subscribe((snapshot) => {
      const { items, isSynced } = snapshot;
      // console.log(`Posts item count: ${items.length}, isSynced: ${isSynced}`);
      // console.log("items", items);
      setPosts(items);
    });
  }, []);

  // useEffect(() => {
  //   const subscription = DataStore.observe(Post).subscribe((msg) => {
  //     console.log("Post subscription model", msg.model);
  //     console.log("Post subscription opType", msg.opType);
  //     console.log("Post subscription elemnt", msg.element);
  //   });

  //   return () => subscription.unsubscribe();
  // }, []);

  return (
    <div
      className="text-white flex-1 border-l border-r
  border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]"
    >
      <div
        className="text-[#d9d9d9 flex items-center sm:justify-between py-2 px-3 sticky
        top-0 z-50 bg-black border-b border-gray-700"
      >
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div
          className="hoverAnimation w-9 h-9 flex items-center 
        justify-center xl:px-0 ml-auto"
        >
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
      <Input />
      <div className="pb-72">
        {posts.map((post) => (
          <PostComponent key={post.id} id={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;

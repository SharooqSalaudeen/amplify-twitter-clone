import Amplify, { DataStore, Predicates, SortDirection } from "aws-amplify";
import { SparklesIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
import PostComponent from "./Post";
import { PostModel } from "../src";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const _posts = await DataStore.query(PostModel, Predicates.ALL, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING),
    });
    setPosts(_posts);
  }, []);

  useEffect(() => {
    const subscription = DataStore.observe(PostModel).subscribe((snapshot) => {
      if (snapshot.opType === "INSERT" && snapshot.model === PostModel) {
        setPosts((posts) => [snapshot.element, ...posts]);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

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
          <PostComponent key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;

import Amplify, { API, Predicates, SortDirection } from "aws-amplify";
import { SparklesIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import Input from "./Input";
import PostComponent from "./Post";
import * as queries from "../src/graphql/queries";
import * as subscriptions from "../src/graphql/subscriptions";

function Feed() {
  const [posts, setPosts] = useState([]);

  console.log("posts", posts);

  useEffect(async () => {
    const { data } = await API.graphql({
      query: queries.listPostsByDate,
      variables: { type: "post", limit: 30, sortDirection: "DESC" },
    });

    setPosts(data.listPostsByDate.items);
  }, []);

  // useEffect(() => {
  //   const subscription = API.graphql({ query: subscriptions.onCreatePost }).subscribe({
  //     next: ({ value }) => {
  //       setPosts((prevState) => [value.data.onCreatePost, ...prevState]);
  //     },
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
        {posts?.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;

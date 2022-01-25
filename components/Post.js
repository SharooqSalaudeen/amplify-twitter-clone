import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled, ChatIcon as ChatIconFilled } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Moment from "react-moment";
import { API } from "aws-amplify";
import { AuthContext, GeneralContext } from "../store";

function Post({ post, postPage }) {
  const { user } = useContext(AuthContext);
  const { setModalStateOpen, setSelectedPostID, modalStateOpen, selectedPostID } = useContext(GeneralContext);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [author, setAuthor] = useState({});
  const router = useRouter();

  //set post author
  useEffect(async () => {
    // const _author = await DataStore.query(UserModel, (user) => user.id("eq", post?.userID));
    // setAuthor(_author[0]);
  }, [post]);

  //set post comments (use graphql elasticsearch)
  useEffect(async () => {
    // const _comments = await DataStore.query(CommentModel, (comment) => comment.postID("eq", post?.id));
    // setComments(_comments);
  }, [post]);

  //set post like count
  useEffect(async () => {
    // const _post = await DataStore.query(LikeModel, (like) => like.postID("eq", post?.id));
    // // const _post = await DataStore.observeQuery(LikeModel, (like) => like.postID("eq", post?.id));
    // setLikes(_post);
  }, [post]);

  //check if i have liked the post
  useEffect(async () => {
    // const _liked = await DataStore.query(LikeModel, (like) => like.postID("eq", post?.id).likeUserId("eq", user?.id));
    // if (_liked.length > 0) {
    //   setLiked(_liked[0]);
    // } else {
    //   setLiked(false);
    // }
  }, [post]);

  // useEffect(() => setLiked(likes.findIndex((like) => like.id === session?.user?.uid) !== -1), [likes]);

  const likePost = async () => {
    // if (liked) {
    //   await DataStore.delete(liked);
    // } else {
    //   await DataStore.save(
    //     new LikeModel({
    //       postID: post?.id,
    //       likeUserId: user?.id,
    //     })
    //   );
    // }
  };

  // if (liked) {
  //   await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
  // } else {
  //   await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
  //     username: session.user.name,
  //   });
  // }

  const deletePost = async () => {};

  return (
    <div className="p-3 flex cursor-pointer border-b border-gray-700" onClick={() => router.push(`/${post?.id}`)}>
      {!postPage && <img src={author?.picture} alt="" className="h-11 w-11 rounded-full mr-4" />}
      <div className="flex flex-col space-y-2 w-full">
        <div className={`flex ${!postPage && "justify-between"}`}>
          {postPage && <img src={author?.picture} alt="Profile Pic" className="h-11 w-11 rounded-full mr-4" />}
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4
                className={`font-bold text-[15px] sm:text-base text-[#d9d9d9] group-hover:underline ${
                  !postPage && "inline-block"
                }`}
              >
                {author?.name}
              </h4>
              <span className={`text-sm sm:text-[15px] ${!postPage && "ml-1.5"}`}>@{author?.tag}</span>
            </div>
            ·{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
              <Moment fromNow>{post?.updatedAt}</Moment>
            </span>
            {!postPage && <p className="text-[#d9d9d9] text-[15px] sm:text-base mt-0.5">{post?.content}</p>}
          </div>
          <div className="icon group flex-shrink-0 ml-auto">
            <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
          </div>
        </div>
        {postPage && <p className="text-[#d9d9d9] mt-0.5 text-xl">{post?.content}</p>}
        {post?.image && <img src={post?.image} alt="" className="rounded-2xl max-h-[700px] object-cover mr-2" />}
        <div className={`text-[#6e767d] flex justify-between w-10/12 ${postPage && "mx-auto"}`}>
          <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPostID(post?.id);
              setModalStateOpen(true);
            }}
          >
            <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <ChatIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            {comments.length > 0 && <span className="group-hover:text-[#1d9bf0] text-sm">{comments.length}</span>}
          </div>

          {user && user?.id === post?.userID ? (
            <div
              className="flex items-center space-x-1 group"
              onClick={(e) => {
                e.stopPropagation();
                deletePost();
                // router.push("/home");
              }}
            >
              <div className="icon group-hover:bg-red-600/10">
                <TrashIcon className="h-5 group-hover:text-red-600" />
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-1 group">
              <div className="icon group-hover:bg-green-500/10">
                <SwitchHorizontalIcon className="h-5 group-hover:text-green-500" />
              </div>
            </div>
          )}

          <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              likePost();
            }}
          >
            <div className="icon group-hover:bg-pink-600/10">
              {liked ? (
                <HeartIconFilled className="h-5 text-pink-600" />
              ) : (
                <HeartIcon className="h-5 group-hover:text-pink-600" />
              )}
            </div>
            {likes.length > 0 && (
              <span className={`group-hover:text-pink-600 text-sm ${liked && "text-pink-600"}`}>{likes.length}</span>
            )}
          </div>

          <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="icon group">
            <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

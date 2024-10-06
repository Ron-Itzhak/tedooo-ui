"use client";
import React, { useEffect, useRef, useState } from "react";
import { Post } from "./types";
import PostCard from "./post-card";
import SpinnerIcon from "../components/spinner-icon";
import InfiniteScroll from "react-infinite-scroll-component";

const url = `${process.env.NEXT_PUBLIC_API}`;
const PostView = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const skip = useRef(0);

  const fetchPosts = async () => {
    if (!hasMore || loading) return;
    setLoading(true);

    try {
      const response = await fetch(`${url}/hw/feed.json?skip=${skip.current}`);
      const result = await response.json();
      const postsData: Post[] = result.data;
      setError(null);
      setPosts((prevPosts) => [...prevPosts, ...postsData]);
      setHasMore(result.hasMore);
      skip.current += 6;
    } catch (err) {
      console.log(err);
      setError("Failed to fetch posts");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchPosts}
      hasMore={hasMore}
      loader={<SpinnerIcon />}
      endMessage={<p>No more posts to load.</p>}
    >
      <div className="flex flex-col pt-4 gap-4 ">
        {error && <p className="mx-auto">{error}</p>}

        {posts.map((post, index) => (
          <PostCard
            id={post.id}
            key={index}
            avatar={post.avatar}
            username={post.username}
            shopName={post.shopName}
            images={post.images}
            text={post.text}
            likes={post.likes}
            comments={post.comments}
          ></PostCard>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default PostView;

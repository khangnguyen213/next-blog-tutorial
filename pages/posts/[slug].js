import React from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { posts } from "../../components/postData";

const Post = () => {
  const router = useRouter();
  const post = posts.filter((post) => post.slug === router.query.slug)[0];

  return (
    <>
      {post && (
        <>
          <Head>
            <title>{post.title}</title>
          </Head>
          <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
              console.log(
                `script loaded correctly, window.FB has been populated`
              )
            }
          />
          <div className="border-2 border-gray-400 p-4 rounded-md">
            <h1 className="text-lg font-semibold mb-4">{post.title}</h1>
            <p>{post.body}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Post;

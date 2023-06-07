import React from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { posts } from "../../components/postData";

const FirstPost = () => {
  const router = useRouter();
  console.log(router);
  const post = posts.filter((post) => post.slug === router.query.slug)[0];

  return (
    <Layout>
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
          <h1>{post.title}</h1>

          <p>{post.body}</p>
        </>
      )}
    </Layout>
  );
};

export default FirstPost;

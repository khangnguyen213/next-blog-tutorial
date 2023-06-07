import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Posts from "../components/Posts";
import { posts } from "../components/postData";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am an enthusiastic and dedicated person eager to kickstart my career
          in the field of web development. With a foundation in front-end and
          back-end, I have a passion for continuous learning and growth.
        </p>
        <h1>Posts</h1>
        <Posts posts={posts} />
      </section>
    </Layout>
  );
}

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Posts from "../components/Posts";
import { posts } from "../components/postData";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl text-justify">
        <p>
          Hello everyone. I'm Nguyen Minh Khang, an entry-level full-stack
          developer!! This is my demo blog for Next.JS tutorial, enjoy ~
        </p>
        <div className="mt-2">
          <Link href="/captur">
            {" "}
            <h1 className="hover:bg-black hover:text-white duration-200 font-bold text-xl px-2 py-1 rounded-md border-2 border-black w-fit">
              Captur Gallery
            </h1>
          </Link>
        </div>
        <div className="mt-4">
          <h1 className="font-bold text-2xl">Posts</h1>
          <Posts posts={posts} />
        </div>
      </section>
    </>
  );
}

Home.isHome = true;

export default Home;

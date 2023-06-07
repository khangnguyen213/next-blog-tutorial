import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { CauseLayout } from "../../components/layout";

export async function getStaticProps() {
  const res = await fetch("https://charitee-be.vercel.app/cause");
  const data = await res.json();
  return {
    props: {
      causes: data.causes,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://charitee-be.vercel.app/cause");
  const data = await res.json();
  const paths = data.causes.map((cause) => {
    return {
      params: { causeID: `${cause._id}` },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

const Cause = ({ causes }) => {
  const router = useRouter();
  const cause = causes.filter((cause) => cause._id === router.query.causeID)[0];
  return (
    <>
      <Head>
        <title>{cause.title}</title>
      </Head>
      <div className="p-4 rounded-3xl border border-gray-500">
        <div className="rounded-3xl overflow-hidden">
          <img src={cause.image} />
        </div>
        <h1 className="text-xl font-bold mt-2">{cause.title}</h1>
        <p className="text-base mt-2 text-justify">{cause.description}</p>
      </div>
    </>
  );
};

Cause.Layout = CauseLayout;

export default Cause;

import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://charitee-be.vercel.app/cause");
  const data = await res.json();
  return {
    props: {
      causes: data.causes,
    },
  };
}

const Captur = ({ causes }) => {
  return (
    <div>
      <Head>
        <title>Captur</title>
      </Head>
      {causes.map((cause) => (
        <div key={cause._id} className="rounded-3xl mb-2 overflow-hidden">
          <Link
            href={{
              pathname: "/captur/[causeID]",
              query: { causeID: cause._id },
            }}
          >
            {" "}
            <img src={cause.image} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Captur;

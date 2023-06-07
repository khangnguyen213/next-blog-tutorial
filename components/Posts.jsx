import React from "react";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <ul className="list-none">
      {posts.map((post) => (
        <li
          className="w-fit text-lg py-2 my-2 border border-gray-500 rounded-md hover:bg-gray-700 hover:text-white duration-200 ease-in"
          key={post.id}
        >
          <Link
            className="py-2 px-2"
            href={{
              pathname: "/posts/[slug]",
              query: { slug: post.slug },
            }}
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;

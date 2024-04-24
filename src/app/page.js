import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">
        Welcome to next level data fetching
      </h1>
      <Link href="/posts">
        <button className="btn btn-primary">Go to Posts page</button>
      </Link>
    </div>
  );
};

export default HomePage;

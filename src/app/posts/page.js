import React from "react";

const PostsPage = async () => {
  const res = await fetch("http://localhost:5000/posts", {
    cache: "force-cache",
  });
  const posts = await res.json();
  //   console.log(posts);
  return (
    <div className="w-full">
      <h1 className="text-3xl">Total Post: {posts.length} </h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="card w-[70%] my-5 mx-auto bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p>{post.likes_count}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;

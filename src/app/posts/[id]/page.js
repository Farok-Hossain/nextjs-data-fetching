import Link from "next/link";

// ssg er maddome 2ta id er data load
// export async function generateStaticParams() {
//   return [{ id: "1" }, { id: "2" }];
// }

// ssg er maddome sob gula id er data load
// jodi 100 ta data thake ar jodi tar modde theke 10 ta data load kora lage tahole map er badole slice use korte hobe
export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();

  const ids = posts.map((post) => {
    return {
      id: post.id + "",
    };
  });
  //   console.log(ids);
  return ids;
}

const DetailsPage = async ({ params }) => {
  const { id } = params;
  //   console.log(params.id);
  // ssr er maddome data load
  const res = await fetch(`http://localhost:5000/posts/${id}`);
  const post = await res.json();
  //   console.log(post);

  return (
    <div>
      <div
        key={post.id}
        className="card w-[70%] my-5 mx-auto bg-base-100 shadow-xl"
      >
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.description}</p>
          <p>Likes: {post.likes_count}</p>

          <div className="card-actions justify-end">
            <Link href="/posts">
              <button className="btn btn-accent">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

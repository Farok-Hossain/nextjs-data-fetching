const DetailsPage = async ({ params }) => {
  const { id } = params;
  //   console.log(params.id);
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
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

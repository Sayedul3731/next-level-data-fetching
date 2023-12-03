import Link from "next/link";


const PostsPage = async () => {
  const res = await fetch('http://localhost:5000/posts', {
   cache: "no-store",
  });
  const posts = await res.json();
  return (
    <div className="">
      <h1>Total Postssss: {posts.length} </h1>
      {
        posts.map(post => <div key={post.id} className="card w-[70%] my-5 mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p> <span className="font-serif font-semibold">Likes:</span> {post.likeCount}</p>
            <div className="card-actions justify-end">
              <Link href={`/posts/${post.id}`}>
                <button className="btn btn-primary">See More</button>
              </Link>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default PostsPage;
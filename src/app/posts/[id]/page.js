import Link from "next/link";

export async function generateStaticParams() {
    const res = await fetch("http://localhost:5000/posts");
    const posts = await res.json();

    const ids = posts.slice(0,3).map((post) => {
        return {
            id: post.id + '',
        }
    })
   return ids;
  }

const DetailPage = async ({params}) => {
    console.log(params);
    const res = await fetch(`http://localhost:5000/posts/${params.id}`)
    const post = await res.json();
    console.log(post);
    return (
        <div className="pt-10">
            <div key={post.id} className="card w-[70%] my-5 mx-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <p> <span className="font-serif font-semibold">Likes:</span> {post.likeCount}</p>
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

export default DetailPage;
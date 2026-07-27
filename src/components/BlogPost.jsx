import { Link } from "react-router";

function BlogPost({ post }) {
  const firstLine = post.content.split(".")[0] + ".";

  return (
    <article className="blog-post">
      <h2>{post.title}</h2>

      <p className="post-content">{firstLine}</p>

      <div className="post-information">
        <p>
          <strong>Author:</strong> {post.author}
        </p>

        <p>
          <strong>Date:</strong> {post.date}
        </p>
      </div>

      <Link className="read-more-button" to={`/posts/${post.id}`}>
        Read Full Post
      </Link>
    </article>
  );
}

export default BlogPost;
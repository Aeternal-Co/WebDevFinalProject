import { useState } from "react";
import { Link, useParams } from "react-router";

import blogPosts from "../data/blogPosts";
import CommentForm from "../components/Comment";
import { useAuth } from "../context/AuthContext";

function IndividualPostPage() {
  const { id } = useParams();
  const { isLoggedIn, user } = useAuth();

  const postId = Number(id);

  const post = blogPosts.find(function (item) {
    return item.id === postId;
  });

  const [comments, setComments] = useState([]);

  function addComment(newComment) {
    setComments([...comments, newComment]);
  }

  if (!post) {
    return (
      <main className="main-content">
        <section className="information-section">
          <h2>Post Not Found</h2>

          <p>The blog post you selected does not exist.</p>

          <Link className="back-link" to="/blog">
            Return Home
          </Link>
        </section>
      </main>
    );
  }

  let commentsDisplay;

  if (comments.length === 0) {
    commentsDisplay = (
      <p className="no-comments">
        No comments yet. Be the first to comment!
      </p>
    );
  } else {
    commentsDisplay = comments.map(function (comment) {
      return (
        <article className="comment-card" key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.text}</p>
        </article>
      );
    });
  }

  return (
    <main className="main-content">
      <article className="blog-post individual-post">
        <Link className="back-link" to="/blog">
          Back to All Posts
        </Link>

        <h2>{post.title}</h2>

        <div className="post-information">
          <p>
            <strong>Author:</strong> {post.author}
          </p>

          <p>
            <strong>Date:</strong> {post.date}
          </p>
        </div>

        <p className="post-content">{post.content}</p>
      </article>

      <section className="comments-page-section">
        {isLoggedIn ? (
          <CommentForm addComment={addComment} username={user.username} />
        ) : (
          <div className="login-to-comment">
            <h3>Want to join the conversation?</h3>
            <p>You need to be logged in before you can leave a comment.</p>
            <Link to="/login" state={{ from: `/posts/${id}` }}>
              Login to Comment
            </Link>
          </div>
        )}

        <div className="existing-comments">
          <h3>Comments</h3>

          {commentsDisplay}
        </div>
      </section>
    </main>
  );
}

export default IndividualPostPage;

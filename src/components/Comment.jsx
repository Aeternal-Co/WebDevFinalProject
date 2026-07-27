import { useState } from "react";

function CommentForm({ addComment, username }) {
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (commentText.trim() === "") {
      setError("Please enter a comment.");
      return;
    }

    const newComment = {
      id: Date.now(),
      name: username,
      text: commentText.trim(),
    };

    addComment(newComment);

    setCommentText("");
    setError("");
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h3>Leave a Comment</h3>
      <p className="commenting-as">Commenting as <strong>{username}</strong></p>

      {error && <p className="form-error">{error}</p>}

      <label htmlFor="comment-text">Comment</label>

      <textarea
        id="comment-text"
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
        placeholder="Write your comment here..."
        rows="5"
      />

      <button type="submit">Submit Comment</button>
    </form>
  );
}

export default CommentForm;

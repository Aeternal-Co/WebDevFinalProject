import BlogPost from "../components/BlogPost";
import blogPosts from "../data/blogPosts";

function BlogPostsPage() {
  return (
    <main className="main-content">
      <section className="page-heading">
        <p className="eyebrow">THE LATEST</p>
        <h2>From The Weekly Blogger</h2>
      </section>

      <section className="blog-list">
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}

export default BlogPostsPage;

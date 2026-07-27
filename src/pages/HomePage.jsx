import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { isLoggedIn, user } = useAuth();

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-text">
          <p className="eyebrow">STORIES • IDEAS • COMMUNITY</p>
          <h2>
            The <span>Weekly</span> Blogger
          </h2>
          <p className="hero-description">
            The Weekly Blogger is a website about expressing yourself and building a community.
          </p>

          <div className="hero-buttons">
            <Link className="primary-button" to="/blog">
              Explore the Blog
            </Link>
            {!isLoggedIn && (
              <Link className="secondary-button" to="/login">
                Login to Join
              </Link>
            )}
          </div>

          {isLoggedIn && (
            <p className="welcome-back">Welcome back, {user.username}!</p>
          )}
        </div>

        <div className="hero-card">
          <div className="paper-lines">
            <p className="tiny-label">THIS WEEK'S THOUGHT</p>
            <blockquote>
              “Disagreeing with someone does not mean you have to stop listening to and respecting them.”
            </blockquote>
            <p className="signature">— The Weekly Blogger</p>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div>
          <span>01</span>
          <h3>Read Something New</h3>
          <p>Short and thoughtful posts.</p>
        </div>
        <div>
          <span>02</span>
          <h3>Share Your Thoughts</h3>
          <p>Log in and join the conversation in the comments.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Come Back Anytime</h3>
          <p>Your login is remembered, so rejoining the conversation is simple.</p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;

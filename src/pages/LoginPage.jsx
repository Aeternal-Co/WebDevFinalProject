import { useState } from "react";
import { Navigate, Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (isLoggedIn) {
    return <Navigate to="/blog" replace />;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (username.trim().length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    login(username);
    navigate(location.state?.from || "/blog", { replace: true });
  }

  return (
    <main className="login-page">
      <section className="login-box">
        <div className="login-intro">
          <p className="eyebrow">WELCOME BACK</p>
          <h2>Login to the Weekly Blogger</h2>
          <p>
            Sign in to explore all posts and leave comments.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {error && <p className="form-error login-error">{error}</p>}

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your username"
            autoComplete="username"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="At least 6 characters"
            autoComplete="current-password"
          />

          <button type="submit">Login</button>
          <p className="login-hint">use any username and password.</p>
          <Link className="home-text-link" to="/">
            ← Back to home
          </Link>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;

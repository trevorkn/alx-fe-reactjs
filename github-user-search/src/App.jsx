import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import "./App.css"

                /** Layout pieces */
function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className='brand'>GitHub User Search</Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        © {new Date().toLocaleDateString("en-US", {month: "2-digit", year: "numeric"})} • Built with React
      </div>
    </footer>
  );
}

      /**  Pages */
function HomePage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const  trimmed = username.trim();
    if (trimmed) navigate(`/user/${trimmed}`);

  }

  return (
    <section>
      <h1 className="h1"> Find a GitHub user</h1>
      <p className='muted'>Type a username and hit Enter. We'll wire this  up to the GitHub API next.</p>

      <form onSubmit={onSubmit} className='form'>
        <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='e.g. torvalds'
        aria-label='GitHub username'
        className='input'
        />
        <button type='submit' className='button'>Search</button>
      </form>
    </section>
  );
}

function UserPage() {
  const { username } = useParams();
  return (
    <section>
      <h1 className="h1">
        User: <span className='accent'>{username}</span>
      </h1>
      <p className='muted'>
        Placeholder view. In teh next step we'll call the GitHub API and render profile data here.
      </p>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section>
    <h1 className='h1'>404</h1>
    <p className='muted'>
      That page doesn't exist. Try checking the URL or go back to the <Link to="/" className="accent">Home page</Link>.
    </p>
    </section>
  );
}
export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container main">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

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

export default HomePage;
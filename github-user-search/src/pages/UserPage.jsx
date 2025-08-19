import { useParams } from 'react-router-dom';

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

export default UserPage;
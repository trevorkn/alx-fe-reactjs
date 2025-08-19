import { useState } from "react";
import { searchUsers, fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername ] = useState("");
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);
        setError("");
        setResults([]);

    try {
        const data = await searchUsers(username, location, minRepos);

        //fetch extra details for each user using fetchUserData
        const detailedResults = await Promise.all(
            data.map(async (user) => {
                const details = await fetchUserData(user.login);
                return { ...user, ...details };
            })
        );
        setResults(data);
    } catch (err) {
        setError("Looks like we cant find the user")
    } finally { 
        setLoading(false);
    }
};

return (
    <div className="p-4 max-w-xl mx-auto">
        <form onSubmit={handleSubmit}
         className="flex flex-col gap-3 bg-gray-900 p-4 rounded-xl shadow-md"
        >
            <input
            type="text"
            placeholder="Enter Github username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
            />
            <input
              type="text"
              placeholder="Filter by location (e.g., Kenya)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
              />
              <input 
               type="number"
               placeholder="Minimum Repositories (optional)"
               value={minRepos}
               onChange={(e) => setMinRepos(e.target.value)}
               min={0}
               className="p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
               />
            <button 
            type="submit"
             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
            
            >
                
                Search
                </button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="mt-6 space-y-4">
        {results.map((user) => (
            <div
            key={user.id}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center gap-4"
            >
            <img
            src={user.avatar_url}
            alt={user.login}
            className="w-16 h-16 rounded-full"
            />
            <div>
                <h2 className="text-lg font-semibold text-white">{user.login}</h2>
                <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
                >
                    View Profile
                </a>
            </div>
            </div>
        ))}
      </div>
    </div>
);
};
export default Search;
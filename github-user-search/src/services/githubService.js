import axios from "axios";

export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
};

// search multiple users with filters
export const searchUsers = async (username, location, minRepos) => {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location}`;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
       `https://api.github.com/search/users?q=${encodeURIComponent(query)}`

    );

    return response.data.items;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export async function getPosts() {
    const res = await fetch(`${BASE_URL}/posts`)
    if (!res.ok) throw new Error(`Error ${res.status}: Failed to fetch posts`)
        // JSON placeholder returns an array of 100 posts with { userId, id, title, body}
    return res.json()
}
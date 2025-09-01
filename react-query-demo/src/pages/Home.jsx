import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className='space-y-4'>
            <h1 className='text-2xl font-semibold'> Home</h1>
            <p className='text-gray-300'> 
                This app demonstrates fetching, caching and refetching with Tanstack React Query.
            </p>
            <Link
               to="/posts"
               className='inline-block rounded-2xl border border-white/10 px-3 py-2 hover:bg-white/5'>
                Go to Posts
               </Link>
        </section>
    )
}
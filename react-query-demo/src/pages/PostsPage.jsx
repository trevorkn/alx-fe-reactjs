import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPosts } from '../api/posts';

export default function PostsPage() {
    const queryClient = useQueryClient()

    const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,  //true while a background refetch is in-flight
    } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
        // These should match the defaults in App.jsx but one could override here:
        // staleTime: 60 * 1000,
        // gcTime: 5 * 60 * 1000,
        // refetchOnWindowFocus: false,
    })

    const handleInvalidate = () => {
        //Mark cached data stale: next mount or next interaction refetches data
        queryClient.invalidateQueries({ queryKey: ['posts']})
    }
 if (isLoading) return <p className='text-gray-300'>Loading posts...</p>
 if (isError) return <p className='text-red-400'>Error: {error.message}</p>

 return (
    <section className='space-y-4'>
        <div className='flex items-center gap-2'>
            <h1 className='text-2xl font-semibold'>Posts</h1>
            {isFetching && <span className='text-sm opacity-75'>(updating...)</span>}
        </div>
        <div className='flex gap-2'>
            <button
               onClick={() => refetch()}
               className='rounded-xl border border-white/10 px-3 py-2 hover:bg-white/5'
               >
                Refetch now
               </button>
               <button
                onClick={handleInvalidate}
                className='rounded-xl border border-white/10 px-3 py-2 hover:bg-white/5'
                >
                    Invalidate cache
                </button>
        </div>

        <ul className='grid gap-3'>
            {data?.map((p) => (
                <li key={p.id} className='rounded-2xl border border-white/10 p-4'>
                    <h2 className='text-lg font-medium'>{p.title}</h2>
                    <p className='mt-1 text-sm text-gray-300'>{p.body}</p>
                    <div className='mt-2 text-xs text-gray-400'>post #{p.id} • User {p.userId}</div>
                </li>
            ))}
        </ul>
    </section>
 )
    
}
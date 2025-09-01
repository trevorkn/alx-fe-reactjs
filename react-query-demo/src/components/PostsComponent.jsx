import { useQuery, useQueryClient } from '@tanstack/react-query';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function fetchPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error(`Error ${res.status}: Failed to fetch posts`);
  return res.json();
}

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const handleInvalidate = () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  };

  if (isLoading) return <p className='text-gray-300'>Loading posts...</p>;
  if (isError) return <p className='text-red-400'>Error: {error.message}</p>;

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
            <div className='mt-2 text-xs text-gray-400'>
              Post #{p.id} • User {p.userId}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

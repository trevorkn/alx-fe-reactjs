import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/PostsPage.jsx'
import PostsPage from './pages/PostsPage.jsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // cache behavior:
    staleTime: 60 * 1000, //1 min of being fresh
    gcTime: 5 * 60 * 1000, // keep in cache for 5 minutes (v5 name for old "cache time")
    refetchOnWindowFocus: false, // so it doesn't auto-refetch when you switch back to tab
    },
  },
})

export default function App() {
  //Dark-mode default
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <header className="sticky top-0 z-10 border-b border-white/10 bg-gray-900/70 backdrop-blur">
      <nav className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-gray-100'>
        <Link to="/" className='font semibold'>React Query Demo</Link>
        <div className='space-x-4'>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/posts" className="hover:underline">Posts</Link>
        </div>
      </nav>
      </header>

      <main className='min-h-screen bg-gray-900 px-4 py-8 text-gray-100'>
        <div className='mx-auto max-w-5xl'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostsPage />} />
          </Routes>
        </div>
      </main>
      </BrowserRouter>
    </QueryClientProvider>
  )
}


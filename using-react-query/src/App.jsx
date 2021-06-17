import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Example1 from './Example1'
import MoviesList from './MoviesList'

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Example1 />
      <MoviesList />
    </QueryClientProvider>
  )
}

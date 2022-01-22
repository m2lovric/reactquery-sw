import { useState } from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  const [page, setPage] = useState('planets');
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className='App'>
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <section className='content'>{page === 'planets' ? <Planets /> : <People />}</section>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

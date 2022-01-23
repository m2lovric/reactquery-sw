import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main className='App'>
        <h1>Star Wars Info</h1>
        <BrowserRouter>
          <section className='content'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Planets />} />
              <Route path='/people' element={<People />} />
            </Routes>
          </section>
        </BrowserRouter>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

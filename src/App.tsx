import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { AppRouter } from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const App = () => {
  const route = createBrowserRouter(AppRouter);
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route}/>
      </QueryClientProvider>
    </>
  )
}


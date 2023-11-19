import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './pages/Home';

//is this the right entry point? ask TA
//import fonts for Joy UI
import '@fontsource/inter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement will changre to ErrorPage component 
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

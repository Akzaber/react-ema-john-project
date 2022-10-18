import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Shopping from './Components/Shopping/Shopping'
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import About from './Components/About/About';
import { shoppingAndCartLoder } from './Loders/ShoppingAndCart';
import Login from './Login/Login';
import Signup from './Components/Signup/Signup';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shopping></Shopping>
        },
        {
          path: '/order',
          loader: shoppingAndCartLoder,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        },
        {
          path: '/shipping',
          element: <PrivateRoute>
            <Shipping></Shipping>
          </PrivateRoute>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        }
      ]
    },
    {
      path: '*',
      element: <h1 style={{textAlign: 'center'}}>Hello People Page Not Found</h1>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

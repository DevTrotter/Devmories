import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './routes/Home/Home.jsx';
import { Normal } from './routes/Normal/Normal.jsx';
import 'sanitize.css';
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/normal",
    element: <Normal/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)

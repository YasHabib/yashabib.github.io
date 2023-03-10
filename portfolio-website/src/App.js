import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import NetCoreProjects from "./pages/NetCoreProjects";
import Contact from "./pages/Contact";
import ReactjsProjects from "./pages/ReactjsProjects";
import JavascriptProjects from "./pages/JavascriptProjects"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const route = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/about',element: <About/> },
  { path: '/projects',element: <Experiences/> },
  { path: '/.netcore',element: <NetCoreProjects/> },
  { path: '/contact',element: <Contact/> },
  { path: '/reactjs',element: <ReactjsProjects/> },
  { path: '/javascript',element: <JavascriptProjects/> }
  ])


function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;

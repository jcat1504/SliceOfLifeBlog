import { Outlet, createBrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';

const Layout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
    
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/post/:id",
        element: <Single />
    },
    {
        path: "/write",
        element: <Write />
    },
        ],
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
]);

export default router;
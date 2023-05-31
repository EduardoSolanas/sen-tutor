import Navbar from './navbar.jsx';
import Footer from './footer.jsx';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer/>
        </>
    );
}
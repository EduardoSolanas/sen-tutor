import Image from 'next/image';

export default function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-secondary text-uppercase text-white fixed-top navbar-fixed-top"
                id="mainNav">
        <div className="container">
            <div className="name-linkedin">
                <a className="navbar-brand" href="/">Eva Coates</a>
                <a href="https://www.linkedin.com/in/ewa-coates-191b764b/" target="_blank">
                    <Image className="linkedin-logo" alt="Eva Coates linkedin profile"
                           src="/linkedin-logo.png" width={27}
                           height={25}/>
                </a>
            </div>
            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                    type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item mx-0 mx-lg-1">
                        <a className="nav-link py-3 px-0 px-lg-3 rounded"
                           href="/#testimonials">Testimonials</a>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <a className="nav-link py-3 px-0 px-lg-3 rounded"
                           href="/#portfolio">Skills</a>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <a className="nav-link py-3 px-0 px-lg-3 rounded"
                           href="/about">About</a>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <a className="nav-link py-3 px-0 px-lg-3 rounded"
                           href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}


import './NavTabs.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
            <h1 className="navbar-brand">Eric Easthope</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            href="#home"
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        >
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                        About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#blog"
                            onClick={() => handlePageChange('Blog')}
                            className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
                        >
                        Blog
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                        Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default NavTabs;

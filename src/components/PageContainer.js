import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './Footer';

import './PageContainer.css'

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Portfolio />;
        }
        if (currentPage === 'About') {
            return <About handlePageChange={handlePageChange}/>;
        }
        if (currentPage === 'Blog') {
            return <Blog />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='d-flex flex-column h-100'>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className="container">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}
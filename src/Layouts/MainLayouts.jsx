import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* dynamic route */}
            <div className='min-h-screen'>

            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayouts;
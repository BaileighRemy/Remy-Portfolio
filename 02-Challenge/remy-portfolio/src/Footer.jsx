import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Baileigh Remy. All Rights Reserved.</p>
            <ul>
                <li><a href="https://github.com/BaileighRemy" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/baileigh-remy/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </footer>
    );
};

export default Footer;
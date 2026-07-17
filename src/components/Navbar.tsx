import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const scrollToSection = (id: string) => {
        if (!isHome) return;
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="navbar-logo">
                    <span className="logo-accent">Neo</span> Lin
                </Link>

                <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <li>
                        {isHome ? (
                            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>關於</a>
                        ) : (
                            <Link to="/#about">關於</Link>
                        )}
                    </li>
                    <li>
                        {isHome ? (
                            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>精選專案</a>
                        ) : (
                            <Link to="/#projects">精選專案</Link>
                        )}
                    </li>
                    <li>
                        <Link to="/projects" className={location.pathname.startsWith('/projects') ? 'active' : ''}>
                            所有專案
                        </Link>
                    </li>
                    <li>
                        {isHome ? (
                            <a href="#timeline" onClick={(e) => { e.preventDefault(); scrollToSection('timeline'); }}>時間軸</a>
                        ) : (
                            <Link to="/#timeline">時間軸</Link>
                        )}
                    </li>
                    <li>
                        {isHome ? (
                            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>技能</a>
                        ) : (
                            <Link to="/#skills">技能</Link>
                        )}
                    </li>
                    <li>
                        {isHome ? (
                            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>聯繫</a>
                        ) : (
                            <Link to="/#contact">聯繫</Link>
                        )}
                    </li>
                </ul>

                <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
}

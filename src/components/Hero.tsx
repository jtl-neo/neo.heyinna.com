import { Link } from 'react-router-dom';
import { profile } from '../data/profile';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content fade-in-up">
                    <div className="hero-label">⚡ Creative Technologist</div>
                    <h1 className="hero-name gradient-text">{profile.name.zh}</h1>
                    <p className="hero-name-en">{profile.name.en}</p>
                    <p className="hero-title">{profile.title}</p>
                    <p className="hero-desc">{profile.summary}</p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                            探索專案 →
                        </a>
                        <Link to="/projects" className="btn btn-outline">
                            所有專案
                        </Link>
                    </div>
                    <div className="hero-stats">
                        <div>
                            <div className="hero-stat-value gradient-text">11+</div>
                            <div className="hero-stat-label">技術專案</div>
                        </div>
                        <div>
                            <div className="hero-stat-value gradient-text">4+</div>
                            <div className="hero-stat-label">競賽獲獎</div>
                        </div>
                        <div>
                            <div className="hero-stat-value gradient-text">2+</div>
                            <div className="hero-stat-label">年工作經驗</div>
                        </div>
                        <div>
                            <div className="hero-stat-value gradient-text">#1</div>
                            <div className="hero-stat-label">全系排名</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

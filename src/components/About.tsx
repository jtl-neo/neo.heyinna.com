import { profile } from '../data/profile';

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <h2 className="section-title">關於我</h2>
                <p className="section-subtitle">About Me</p>

                <div className="about-grid">
                    <div className="about-text">
                        <p>{profile.summary}</p>
                        <p>{profile.goal}</p>
                    </div>

                    <div className="about-highlights">
                        <div className="glass-card about-highlight-item">
                            <span className="about-highlight-icon">🎓</span>
                            <div>
                                <div className="about-highlight-title">學術成就</div>
                                <div className="about-highlight-desc">
                                    數位內容科技學系｜全系第一名畢業
                                </div>
                            </div>
                        </div>
                        <div className="glass-card about-highlight-item">
                            <span className="about-highlight-icon">🏗️</span>
                            <div>
                                <div className="about-highlight-title">核心專長</div>
                                <div className="about-highlight-desc">
                                    {profile.expertise.slice(0, 3).join('・')}
                                </div>
                            </div>
                        </div>
                        <div className="glass-card about-highlight-item">
                            <span className="about-highlight-icon">🏆</span>
                            <div>
                                <div className="about-highlight-title">在校服務</div>
                                <div className="about-highlight-desc">
                                    {profile.services.join('・')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

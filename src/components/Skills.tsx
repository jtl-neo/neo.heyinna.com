import { profile } from '../data/profile';

const icons = ['⚡', '☁️', '🤖', '🎨'];

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <h2 className="section-title">技術能力</h2>
                <p className="section-subtitle">Technical Skills Matrix</p>

                <div className="skills-grid">
                    {profile.skills.map((group, i) => (
                        <div className="glass-card skill-card" key={group.category}>
                            <div className="skill-card-header">
                                <span className="skill-card-icon">{icons[i] || '🔧'}</span>
                                <h3>{group.category}</h3>
                            </div>
                            <div className="skill-items">
                                {group.items.map((item) => (
                                    <span className="skill-item" key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications & Languages */}
                <div style={{ marginTop: '2.5rem' }}>
                    <div className="skills-grid">
                        <div className="glass-card skill-card">
                            <div className="skill-card-header">
                                <span className="skill-card-icon">📜</span>
                                <h3>證照與學程</h3>
                            </div>
                            <div className="skill-items">
                                {profile.certifications.map((c) => (
                                    <span className="skill-item" key={c}>{c}</span>
                                ))}
                            </div>
                        </div>
                        <div className="glass-card skill-card">
                            <div className="skill-card-header">
                                <span className="skill-card-icon">🌐</span>
                                <h3>語言能力</h3>
                            </div>
                            <div className="skill-items">
                                {profile.languages.map((l) => (
                                    <span className="skill-item" key={l}>{l}</span>
                                ))}
                                <span className="skill-item">中文（母語）</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

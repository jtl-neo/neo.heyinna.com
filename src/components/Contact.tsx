import { profile } from '../data/profile';

export default function Contact() {
    return (
        <>
            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="contact-content">
                        <h2 className="gradient-text">Let's Connect</h2>
                        <p className="contact-desc">
                            歡迎聯繫我討論合作機會、技術交流或任何想法
                        </p>
                        <div className="contact-links">
                            <a href={`mailto:${profile.email}`} className="glass-card contact-link-card">
                                <span>✉️</span>
                                <div>
                                    <div className="contact-label">Email</div>
                                    <div className="contact-value">{profile.email}</div>
                                </div>
                            </a>
                            <a href={`tel:${profile.phone}`} className="glass-card contact-link-card">
                                <span>📱</span>
                                <div>
                                    <div className="contact-label">Phone</div>
                                    <div className="contact-value">{profile.phone}</div>
                                </div>
                            </a>
                            <a href={profile.website} target="_blank" rel="noopener noreferrer" className="glass-card contact-link-card">
                                <span>🌐</span>
                                <div>
                                    <div className="contact-label">Website</div>
                                    <div className="contact-value">ljthub.com</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    © {new Date().getFullYear()} {profile.name.en} ({profile.name.zh}). Built with React.
                </div>
            </footer>
        </>
    );
}

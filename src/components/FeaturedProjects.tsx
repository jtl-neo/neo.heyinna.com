import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function FeaturedProjects() {
    const featured = projects.filter((p) => p.featured);

    return (
        <section className="section" id="projects">
            <div className="container">
                <h2 className="section-title">精選專案</h2>
                <p className="section-subtitle">Featured Projects</p>

                <div className="featured-grid">
                    {featured.map((project, index) => (
                        <Link
                            to={`/projects/${project.id}`}
                            key={project.id}
                            className="glass-card project-card"
                        >
                            <div className="project-card-header">
                                <span className="project-card-number">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="project-card-arrow">↗</span>
                            </div>
                            <div className="project-card-role">{project.role}</div>
                            <h3>{project.title}</h3>
                            <div className="project-card-subtitle">{project.subtitle}</div>
                            <p>{project.summary}</p>
                            <div className="project-card-tags">
                                {project.tags.slice(0, 5).map((tag) => (
                                    <span className="tag" key={tag}>{tag}</span>
                                ))}
                                {project.tags.length > 5 && (
                                    <span className="tag">+{project.tags.length - 5}</span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    <Link to="/projects" className="btn btn-outline">
                        查看所有專案 →
                    </Link>
                </div>
            </div>
        </section>
    );
}

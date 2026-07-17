import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import Awards from '../components/Awards';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <FeaturedProjects />
            <Timeline limit={10} />
            <Skills />
            <Awards />
            <Contact />
        </>
    );
}

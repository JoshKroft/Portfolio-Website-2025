import './Projects.css';
import reactLogo from '../../assets/react.svg';
import aurora from '../../assets/frutiger-aurora-1.webp';
import Footer from '../../components/Footer';

function Projects() {
    const projects = [
        {
            id: 'todo',
            title: 'Todo App',
            desc: 'Followed a tutorial and created a todo app using React.js.',
            img: reactLogo,
            demo: 'https://todoappjustice.netlify.app/'
        },
        {
            id: 'portfolio',
            title: 'Portfolio Website',
            desc: 'Created my own portfolio website using React.js and Vanilla CSS.',
            img: aurora,
            demo: '#'
        }
    ];

    return (
        <div className="projects-page">

            <div className="Development">
                <h3>My Projects</h3>
                <ul>
                    {projects.map(p => (
                        <li key={p.id}>
                            <div style={{fontWeight:700}}>{p.title}</div>
                            <div style={{marginTop:6, marginBottom:8}}>{p.desc}</div>
                            <a className="project-link secondary" href={p.demo} target="_blank" rel="noopener noreferrer">Open</a>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Projects
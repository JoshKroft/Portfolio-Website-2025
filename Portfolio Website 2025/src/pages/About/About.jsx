
import './About.css';
import epicPhoto from '../../assets/epic photo.jpg';

function About() {
    return (
        <div className="parent-container">
            <div className="content-wrapper">
                <img src={epicPhoto} alt="about-picture" />
                <div className="about-container">
                <h2> 
                    <strong>I'm a Senior studying Computer Science at Missouri S&T</strong> with a passionate drive for software development and graphic design.
                    Since 2023, I've been designing various products for ACM Hack such as stickers, sweaters, and more importantly websites. I design the 
                    websites using Figma and other products with Canva such as recruitment flyers. I recently joined ACM Web to further enhance my skills into becoming a web developer
                    such as learning more about how to use React.
                </h2>
                <h2>
                    Outside of school and ACM, I am very proud of becoming an Eagle Scout back in 2021. In which I lead through example to finish my 
                    Eagle Scout Project by having volunteers help me remove weeds and plant flowers at a local FireStation in my hometown.
                    I enjoy helping others and being a creative thinker that solves problems in unique ways. I now aspire to expand my technical skills through academic and personal projects.
                </h2>
                </div>
            </div>
            <div className="Tools">
                <h3>Tools I have used:</h3>
                <ul>
                    <li>Adobe Illustrator</li>
                    <li>Blender</li>
                    <li>Godot</li>
                    <li>Unity</li>
                    <li>JavaScript</li>
                    <li>Figma</li>
                    <li>Canva</li>
                </ul>
            </div>
            <div className="Development">
                <ul>
                    <li>C++</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>SQL</li>
                </ul>
            </div>
        </div>
    )
}

export default About
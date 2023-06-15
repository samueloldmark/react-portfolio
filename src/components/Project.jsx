import { prototype, logo, } from "../assets";

const Project = () => (
    <section className="project-box">
        <div className='project-items'>
            <div className="project-pic-box-1">
                <div className="project-images">
                    <img src={prototype} alt="prototype-picture" className="project-pic1" />
                </div>
                <div className="project-header-info">
                    <div className="project-header">
                        <img src={logo} alt="logo" className="logo" />
                        <h1>IINE</h1>
                    </div>
                    <div className="project-info">
                        <h2>Standing in line have <br /> never been easier </h2>
                        <h3>LIINE allows you to take place in a queue using your mobile phone. It gives you the opportunity to efficiently use the time wasted standing in line.</h3>
                    </div>
                </div>
            </div>

        </div>
    </section>
)

export default Project;
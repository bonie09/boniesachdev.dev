import React from 'react'
import allprojects from '../Components/allprojects';
import Tittle from '../Components/Tittle'

const ProjectPage = () => {
    return (
        <div>
            <div className="p-title">
                <Tittle title={"Projects"} span={"Projects"} />
            </div>
            <div className="ProjectPage">
                {
                    allprojects.map((project)=>{
                        return <div className="project" key={project.id}>
                                    <div className="project-content">
                                        <img src={project.image} alt=""/>
                                        <a href={project.link} className="project-link">
                                            {project.title}
                                        </a>
                                    </div>
                                </div>
                    })
                }
            </div>
        </div>
    )
}

export default ProjectPage

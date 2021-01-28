import React from "react";
import ProjectCard from "../components/ProjectCard"
import Footer from "../components/Footer"

function Home() {
    const style={
        background:{
            backgroundColor: "#99B898"
        }
    }
    return(
        <div style={style.background}>
            <ProjectCard />
        </div>
    )

}

export default Home;
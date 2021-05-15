import React from "react";
import style from "./Project.module.css";

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.pictureContainer}>
                <h3 className={style.button}>
                    <a href="">Watch</a>
                </h3>
            </div>
            <h3 className={style.nameOfTheProject}>{props.name}</h3>
            <div className={style.projectDescription}>{props.description}</div>
        </div>
    );
}

export default Project;
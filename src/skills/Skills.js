import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"Js"} description={"Dolorum excepturi facere ipsam laudantium, natus nobis quae reiciendis sed velit vitae voluptate."}/>
                    <Skill title={"Css"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Skill title={"React"} description={"Amet assumenda deserunt dolor earum ut, voluptatum! Ad doloribus."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
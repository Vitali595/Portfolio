import React from "react";
import style from "./DistantWork.module.css";
import styleContainer from "../common/styles/Container.module.css"

function DistantWork() {
    return (
        <div className={style.distantWorkBlock}>
            <div className={`${styleContainer.container} ${style.distantWorkContainer}`}>
                <h2 className={style.text}>Рассматриваю варианты удаленной работы</h2>
                <h3 className={style.button}>
                    <a href="">HIRE ME</a>
                </h3>
            </div>
        </div>
    );
}

export default DistantWork;
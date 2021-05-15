import React from "react";
import style from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css"

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Vitali Kavalchuk</h2>
                <div className={style.footerContainerBlock}>
                    <div className={style.block}></div>
                    <div className={style.block}></div>
                    <div className={style.block}></div>
                    <div className={style.block}></div>
                </div>
                <span className={style.footerSpan}>© 2021 Все права защищены</span>
            </div>

        </div>
    );
}

export default Footer;
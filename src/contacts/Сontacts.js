import React from "react";
import style from "./Сontacts.module.css";
import styleContainer from "../common/styles/Container.module.css"

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input type="text" className={style.input}/>
                    <input type="text" className={style.input}/>
                    <textarea className={style.textArea}/>
                </form>
                <h3 className={style.button}>
                    <a href="">SEND MESSAGE</a>
                </h3>
            </div>

        </div>
    );
}

export default Contacts;
import React from "react";
import sushiImage from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Японка кухня</h1>
                <HeaderCartButton onClick={props.onShowCart}
                onClose={props.onCloseCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={sushiImage} alt="Блюда японской кухни"/>
            </div>
        </React.Fragment>
    )
}

export default Header;
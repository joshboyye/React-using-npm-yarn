import styles from "./CSSModule.module.scss";
const CSSModule =() =>{
    return (
        <div className={"${styles.wrapper}${styles.inverted}"}>
            안녕하세요,저는 <span className="something">css Module!</span>
        </div>
    );
};

export default CSSModule;
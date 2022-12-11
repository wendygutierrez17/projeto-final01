import styles from "./body.module.css"

function Body (props){
    return(
        <div className={`${styles.body} ${styles[props.setClass]}`}>{props.children}</div>
    )
}
export default Body


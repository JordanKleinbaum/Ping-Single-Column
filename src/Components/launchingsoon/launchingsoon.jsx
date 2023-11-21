import styles from "./launchingsoon.module.css";
function Launchingsoon() {
  return (
    <>
      <h1 className={styles.we}>
        We are launching <span className={styles.soon}>soon!</span>
      </h1>
      <p className={styles.subscribe}>Subscribe and get notified</p>
    </>
  );
}

export default Launchingsoon;

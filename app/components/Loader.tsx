"use client"


import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.card}>
      <div className={styles.loader}>
        <p>loading</p>
        <div className={styles.words}>
          <span className={styles.word}>Creativity</span>
          <span className={styles.word}>Branding</span>
          <span className={styles.word}>Desgins</span>
          <span className={styles.word}>Visuals</span>
          <span className={styles.word} style={{ color: 'red' }}>Karma Films</span>

        </div>
      </div>
    </div>
  );
};

export default Loader;

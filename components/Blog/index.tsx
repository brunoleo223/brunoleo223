import styles from '../../styles/Index.module.scss';

export function Blog(){
    return (
        <section className={styles.blog}>
        <div className="content">
          <div className={styles.link}>
            <h3>EDUCATION </h3>
          </div>
          <div className={styles.link}>
            <h3>CODE & DESIGN </h3>
          </div>
          <div className={styles.link}>
            <h3>FAMILY </h3>
          </div>
          <div className={styles.link}>
            <h3>EXPERIENCE </h3>
          </div>
          <div className={styles.link}>
            <h3>BUSINESS </h3>
          </div>
          <div className={styles.link}>
            <h3>TRAVEL</h3>
          </div>
          <div className={styles.link}>
            <h3>explore</h3>
          </div>
        </div>
      </section>
    )
}
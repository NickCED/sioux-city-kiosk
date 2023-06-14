import styles from './TimelineKey.module.css';

export default function TimelineKey(props) {
  return (
    <div className={styles.TimelineKey}>
      <div className={styles.keyTitle}>Timeline Key</div>
      <div className={styles.keyCont}>
        <div className={styles.auto}>Automobile Racing</div>
        <div className={styles.baseball}>Baseball</div>
        <div className={styles.basketball}>Basketball</div>
        <div className={styles.football}>Football</div>
        <div className={styles.horse}>Horse & Dog Racing</div>
        <div className={styles.hockey}>Ice Hockey</div>
        <div className={styles.soccer}>Soccer</div>
        <div className={styles.softball}>Softball</div>
      </div>
    </div>
  );
}

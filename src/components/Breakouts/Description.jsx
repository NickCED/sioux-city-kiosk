export default function Description(props) {
  return (
    <div className={styles.Description}>
      <p className={styles.descriptionText}>{props.entry.description}</p>4
    </div>
  );
}

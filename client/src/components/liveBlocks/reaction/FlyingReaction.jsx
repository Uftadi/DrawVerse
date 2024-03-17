import styles from './index.module.css';

const FlyingReaction = ({ x, y, timestamp, value }) => (
  <div
    className={`pointer-events-none absolute select-none ${
      styles.disappear
    } text-${(timestamp % 5) + 2}xl ${styles['goUp' + (timestamp % 3)]}`}
    style={{ left: x, top: y }}
  >
    {console.log('flyingReactionValue', value)}
    <div className={styles['leftRight' + (timestamp % 3)]}>
      <div className='-translate-x-1/2 -translate-y-1/2 transform'>{value}</div>
    </div>
  </div>
);

export default FlyingReaction;

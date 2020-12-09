import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function randomСolor() {
  return '#' + parseInt(Math.random() * 0xffffff).toString(16);
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {{ title } && (
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
        </div>
      )}
      <ul className={styles.statList}>
        {stats.map(statItem => (
          <li
            style={{ backgroundColor: randomСolor() }}
            key={statItem.id}
            className={styles.item}
          >
            <span className={styles.label}>{statItem.label}</span>
            <span className={styles.percentage}>{statItem.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;

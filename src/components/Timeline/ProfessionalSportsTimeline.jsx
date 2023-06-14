import React from 'react';
import { useState, useEffect, useContext } from 'react';
import styles from './ProfessionalSportsTimeline.module.css';
import Timeline from './Timeline';
import TimelineKey from './TimelineKey';

export default function ProfessionalSportsTimeline(props) {
  return (
    <div className={styles.ProfessionalSportsTimeline}>
      <TimelineKey></TimelineKey>
    </div>
  );
}

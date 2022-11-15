import React, { useEffect, useLayoutEffect, useState } from 'react';
import styles from './style/Scale.module.css';

interface Props {
  max: number;
  min: number;
  value: number;
}

export function Scale({ min, max, value }: Props) {
  const scaleToZero = min < 0 ? Math.abs(min) : -min;
  const scaleSize = scaleToZero + max;
  const scaledValue = scaleToZero + value;
  const scalePercentage = Math.round((scaledValue / scaleSize) * 100);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => setWidth(scalePercentage), 50);
  }, [scalePercentage]);

  return (
    <div className={styles.scale}>
      <div className={styles.track} style={{ width: `${width}%` }}></div>
    </div>
  );
}

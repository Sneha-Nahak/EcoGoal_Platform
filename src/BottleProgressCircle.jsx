import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import { FaWineBottle } from 'react-icons/fa';

Chart.register(ArcElement, Tooltip);

function BottleProgressCircle({ progress, size = 150, thickness = 12, iconSize = 40 }) {
  const data = {
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['#4FD1C5', '#E2E8F0'],
        borderWidth: 0,
        cutout: `${100 - thickness}%`,
      },
    ],
  };

  const options = {
    cutout: `${100 - thickness}%`,
    responsive: false,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div
      style={{
        width: size,
        height: size,
        position: 'relative',
      }}
    >
      <Doughnut data={data} options={options} width={size} height={size} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: iconSize,
          color: '#4FD1C5',
        }}
      >
        <FaWineBottle />
      </div>
    </div>
  );
}

export default BottleProgressCircle;

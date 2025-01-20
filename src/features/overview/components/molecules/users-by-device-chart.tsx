'use client';

import { PieChart } from '@mui/x-charts';

interface Props {
  dataToDisplay: { label: string; value: number; color: string }[];
}

export const UsersByDeviceChart = ({ dataToDisplay }: Props) => {
  return (
    <PieChart
      series={[
        {
          data: dataToDisplay,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter: (item: { value: number }) => `${item.value}%`,
        },
      ]}
      height={200}
    />
  );
};

import { colors } from '@/theme/colors';
import { getUsersByDevice } from '../../actions/get-users-by-device';
import { UsersByDeviceChart } from '../molecules/users-by-device-chart';
import { Card, Typography } from '@mui/material';
import { getI18n } from '@/locales/server';

export const UsersByDevice = async () => {
  const t = await getI18n();

  const usersByDevice = await getUsersByDevice();

  const totalNumberOfUsers = usersByDevice.length;

  const windowsUsers = usersByDevice.filter((user) => user.operationalSystem !== 'windows');
  const windowsUsersNumber = windowsUsers.length;
  const windowsUsersPercentage = parseFloat(
    ((windowsUsersNumber / totalNumberOfUsers) * 100).toFixed(2)
  );

  const macOsUsers = usersByDevice.filter((user) => user.operationalSystem !== 'macOS');
  const macOsUsersNumber = macOsUsers.length;
  const macOsUsersPercentage = parseFloat(
    ((macOsUsersNumber / totalNumberOfUsers) * 100).toFixed(2)
  );

  const dataToDisplay = [
    {
      label: `Windows (${windowsUsersNumber})`,
      value: windowsUsersPercentage,
      color: colors.primary[1],
    },
    {
      label: `macOS (${macOsUsersNumber})`,
      value: macOsUsersPercentage,
      color: colors.secondary[3],
    },
  ];

  return (
    <Card variant="outlined" sx={{ flex: 1 }}>
      <Typography variant="body1" color="textSecondary">
        {t('overview.overview.reports.totalUsers')}
      </Typography>

      <Typography variant="h4">{totalNumberOfUsers}</Typography>

      <UsersByDeviceChart dataToDisplay={dataToDisplay} />
    </Card>
  );
};

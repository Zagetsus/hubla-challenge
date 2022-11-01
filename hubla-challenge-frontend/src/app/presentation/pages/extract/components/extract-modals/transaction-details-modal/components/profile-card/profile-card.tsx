import { Avatar, Box, Typography } from '~/app/presentation/components';
import { ProfileCardProps } from '~/app/presentation/pages/extract/components/extract-modals/transaction-details-modal/components/profile-card/profile-card-props.interface';
import makeStyles from './profile-card-styles';

function ProfileCardComponent({ name }: ProfileCardProps) {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Avatar className='avatar' />
      <Typography className='name'>{name}</Typography>
    </Box>
  );
}

export default ProfileCardComponent;

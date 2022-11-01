import { useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  Box,
  InputAdornment,
  InputLabel,
  IconButton,
  FormHelperText
} from '~/app/presentation/components';
import makeStyles, {
  Input
} from '~/app/presentation/components/common/input/input-styles';
import { ClosedEyeIcon, EyeIcon } from '~/app/presentation/components/icons';
import { InputProps } from '~/app/presentation/components/interfaces';
import { LightTheme as theme } from '~/styles/theme';

function InputComponent({
  name,
  control,
  title,
  endIcon,
  startIcon,
  type,
  error,
  message,
  errorMessage,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const classes = makeStyles();
  const inputAdornmentEnd = (
    <InputAdornment position='end'>
      {type === 'password' ? (
        <IconButton onClick={() => setShowPassword(value => !value)}>
          {showPassword ? (
            <EyeIcon fill={theme.palette.primary.main} />
          ) : (
            <ClosedEyeIcon fill={theme.palette.primary.main} />
          )}
        </IconButton>
      ) : (
        endIcon
      )}
    </InputAdornment>
  );

  const inputAdornmentStart = (
    <InputAdornment position='start'>{startIcon}</InputAdornment>
  );

  return (
    <Controller
      data-testid='input-control'
      name={name}
      control={control}
      defaultValue=''
      render={({ field, fieldState: { error, invalid } }) => (
        <Box>
          <InputLabel className={classes.title}>{title}</InputLabel>
          <Input
            {...field}
            type={
              type === 'password' ? (showPassword ? 'text' : 'password') : type
            }
            startAdornment={inputAdornmentStart}
            endAdornment={inputAdornmentEnd}
            error={invalid}
            {...props}
          />
          <FormHelperText className={classes.helperText} error={invalid}>
            {error?.message || message}
          </FormHelperText>
        </Box>
      )}
    />
  );
}

export default InputComponent;

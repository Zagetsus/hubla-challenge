export interface ButtonProps {
  label?: string;
  fullWidth?: boolean;
  variantSize?: 'small' | 'medium' | 'large' | 'full';
  disabled?: boolean;
  variantStyle?: 'contained' | 'outlined' | 'text';
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disableRipple?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

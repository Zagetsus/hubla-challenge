import { Button } from '~/app/presentation/components';
import { ButtonSizeEnum } from '~/app/presentation/components/enums';
import { ButtonProps } from '~/app/presentation/components/interfaces';

function ButtonComponent({
  label,
  disabled,
  variantSize,
  variantStyle,
  children,
  onClick,
  className,
  disableRipple,
  ...props
}: ButtonProps) {
  function handleRender() {
    const hasChildren = !!children;
    if (hasChildren) {
      return children;
    }
    return label;
  }

  return (
    <Button
      variant={variantStyle}
      disabled={disabled}
      onClick={onClick}
      className={className}
      data-testid='button'
      disableRipple={disableRipple}
      {...props}
      style={{
        ...(variantSize && {
          width: ButtonSizeEnum[variantSize]
        })
      }}
    >
      {handleRender()}
    </Button>
  );
}

export default ButtonComponent;

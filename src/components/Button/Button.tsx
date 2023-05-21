import cn from 'classnames';
import css from './Button.module.scss';

interface ButtonProps {
  children: string;
  type: 'button' | 'submit';
  variant: 'submit' | 'cancel';
  className?: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps): JSX.Element => {

  const { children, type, variant, className, disabled } = props;

  return (
    <button
      className={cn(css.base, css[variant], className, {[css.cancel]: disabled})}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button;
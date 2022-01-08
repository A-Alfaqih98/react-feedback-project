function Button({ children, type, version, isDisabled }) {
  return (
    /* version can be either primary or secondary */
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  version: 'primary',
  isDisabled: false,
};

export default Button;

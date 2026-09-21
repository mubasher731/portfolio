/**
 * Frosted surface used for nearly every block on the page.
 *
 * @param {boolean} [hover]    - enable the lift-on-hover effect
 * @param {boolean} [gradient] - add the gradient hairline border
 */
const Card = ({
  hover = true,
  gradient = false,
  className = "",
  children,
  ...rest
}) => (
  <div
    className={`glass rounded-3xl ${hover ? "lift" : ""} ${
      gradient ? "ring-gradient" : ""
    } ${className}`}
    {...rest}
  >
    {children}
  </div>
);

export default Card;

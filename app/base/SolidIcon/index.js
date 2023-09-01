import * as Icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SolidIcon({ icon, iconColor, newClasses }) {
  const { [icon]: fontIcon } = {
    faChevronDown: Icon.faChevronDown,
    faLocationDot: Icon.faLocationDot,
    faPhone: Icon.faPhone
  };

  return (
    <FontAwesomeIcon
      className={`${newClasses && newClasses}`}
      icon={fontIcon}
      style={{ color: iconColor }}
    />
  );
}

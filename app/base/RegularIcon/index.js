import * as Icon from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RegularIcon({ icon, iconColor }) {
  const { [icon]: fontIcon } = {
    faBuilding: Icon.faBuilding,
    faChevronDown: Icon.faChevronDown,
    faCircleDot: Icon.faCircleDot,
    faGem: Icon.faGem,
    faLightbulb: Icon.faLightbulb
  };

  return (
    <FontAwesomeIcon
      className="h-8"
      icon={fontIcon}
      style={{ color: iconColor }}
    />
  );
}

import * as Icon from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function RegularIcon({ icon, iconColor, newClasses }) {
  const { [icon]: fontIcon } = {
    faBuilding: Icon.faBuilding,
    faCircleDot: Icon.faCircleDot,
    faFaceSmileWink: Icon.faFaceSmileWink,
    faFile: Icon.faFile,
    faGem: Icon.faGem,
    faLightbulb: Icon.faLightbulb,
    faComments: Icon.faComments,
    faUser: Icon.faUser
  };

  return (
    <FontAwesomeIcon
      className={`${newClasses && newClasses}`}
      icon={fontIcon}
      style={{ color: iconColor }}
    />
  );
}

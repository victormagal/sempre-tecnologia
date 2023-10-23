import * as Icon from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialIcon({ icon, iconColor, newClasses }) {
  const { [icon]: fontIcon } = {
    faInstagram: Icon.faInstagram,
    faLinkedinIn: Icon.faLinkedinIn,
    faSquareFacebook: Icon.faSquareFacebook,
    faTwitter: Icon.faTwitter,
    faWhatsapp: Icon.faWhatsapp
  };

  return (
    <FontAwesomeIcon
      className={`${newClasses && newClasses}`}
      icon={fontIcon}
      style={{ color: iconColor }}
    />
  );
}

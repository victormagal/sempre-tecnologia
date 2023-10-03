import * as Icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SolidIcon({ icon, iconColor, newClasses }) {
  const { [icon]: fontIcon } = {
    faArrowsUpDownLeftRight: Icon.faArrowsUpDownLeftRight,
    faBars: Icon.faBars,
    faBellConcierge: Icon.faBellConcierge,
    faBook: Icon.faBook,
    faBreadSlice: Icon.faBreadSlice,
    faBuildingShield: Icon.faBuildingShield,
    faBurger: Icon.faBurger,
    faCalculator: Icon.faCalculator,
    faCarSide: Icon.faCarSide,
    faChair: Icon.faChair,
    faCheck: Icon.faCheck,
    faChevronDown: Icon.faChevronDown,
    faChevronLeft: Icon.faChevronLeft,
    faChevronRight: Icon.faChevronRight,
    faCow: Icon.faCow,
    faDownload: Icon.faDownload,
    faDog: Icon.faDog,
    faFaceSmile: Icon.faFaceSmile,
    faFileLines: Icon.faFileLines,
    faHeadset: Icon.faHeadset,
    faHelmetSafety: Icon.faHelmetSafety,
    faIceCream: Icon.faIceCream,
    faLocationDot: Icon.faLocationDot,
    faMinus: Icon.faMinus,
    faPhone: Icon.faPhone,
    faTractor: Icon.faTractor,
    faScissors: Icon.faScissors,
    faSeedling: Icon.faSeedling,
    faShirt: Icon.faShirt,
    faStar: Icon.faStar,
    faStethoscope: Icon.faStethoscope,
    faXmark: Icon.faXmark,
    faWaterLadder: Icon.faWaterLadder
  };

  return (
    <FontAwesomeIcon
      className={`${newClasses && newClasses}`}
      icon={fontIcon}
      style={{ color: iconColor }}
    />
  );
}

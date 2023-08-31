import { neutralDark, neutralMid } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';
import { Card } from '@/app/base/Wrappers';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CardFeature({
  bgColor,
  description,
  iconColor,
  title
}) {
  return (
    <Card background={bgColor} className="p-6">
      <FontAwesomeIcon
        className="h-10"
        icon={faBuilding}
        style={{ color: iconColor }}
      />
      <Title appearance="h5" color={neutralDark[500]}>
        {title}
      </Title>
      <Text appearance="p3" color={neutralMid[600]}>
        {description}
      </Text>
    </Card>
  );
}

import { neutralDark, neutralMid } from '@/app/base/Colors';
import FontIcon from '@/app/base/FontIcon';
import { Text, Title } from '@/app/base/Typography';
import { Card } from '@/app/base/Wrappers';

export default function CardFeature({
  bgColor,
  description,
  icon,
  iconColor,
  third,
  title
}) {
  return (
    <Card
      background={bgColor}
      className={`${third ? 'col-span-4' : 'col-span-3'} p-6`}
    >
      <FontIcon icon={icon} iconColor={iconColor} />
      <Title appearance="h5" className="mb-2 mt-8" color={neutralDark[500]}>
        {title}
      </Title>
      <Text appearance="p3" color={neutralMid[600]}>
        {description}
      </Text>
    </Card>
  );
}

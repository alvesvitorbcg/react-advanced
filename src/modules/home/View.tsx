import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ReactComponent as PaperIcon } from './../../shared/icons/paper.svg';
import { ReactComponent as SpeedometerIcon } from './../../shared/icons/speedometer.svg';

export function ActionAreaCard({
  margin,
  title,
  description,
  icon,
}: {
  margin?: string;
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <Card sx={{ maxWidth: 345, margin }}>
      <CardActionArea sx={{ padding: 4 }}>
        {icon()}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontWeight="500"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function View() {
  const cards = [
    {
      title: 'Calendar optimization',
      description:
        'Create a new calendar from the future or update / re-optimize your current plan',
      icon: () => <PaperIcon></PaperIcon>,
    },
    {
      title: 'Post-event analysis',
      description:
        'Review the performance of past promotions based on uplifts and financial KPIs',
      icon: () => <SpeedometerIcon></SpeedometerIcon>,
    },
  ];

  const renderCards = () =>
    cards.map((card, key) => {
      return (
        <ActionAreaCard
          key={key}
          margin="5px 20px"
          description={card.description}
          title={card.title}
          icon={card.icon}
        ></ActionAreaCard>
      );
    });
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        direction: 'ltr',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      {renderCards()}
    </div>
  );
}

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import ModulesRoutes from '../core/components/ModulesRoutes';
import { ReactComponent as PaperIconComponent } from './../../shared/icons/paper.svg';
import { ReactComponent as SpeedometerIconComponent } from './../../shared/icons/speedometer.svg';
import './View.scss';

export function ActionAreaCard({
  margin,
  title,
  description,
  icon,
  onClick,
}: {
  margin?: string;
  title: string;
  description: string;
  icon: any;
  onClick: Function;
}) {
  return (
    <Card onClick={() => onClick()} sx={{ maxWidth: 345, margin }}>
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
const PaperIcon = () => <PaperIconComponent />;
const SpeedometerIcon = () => <SpeedometerIconComponent />;

export default function View() {
  const navigate = useNavigate();
  const cards = [
    {
      title: 'Calendar optimization',
      description:
        'Create a new calendar from the future or update / re-optimize your current plan',
      icon: PaperIcon,
      route: ModulesRoutes.find((r) => r.label === 'Calendar')?.url ?? '',
    },
    {
      title: 'Post-event analysis',
      description:
        'Review the performance of past promotions based on uplifts and financial KPIs',
      icon: SpeedometerIcon,
      route: ModulesRoutes.find((r) => r.label === 'Analysis')?.url ?? '',
    },
  ];

  const redirectTo = (route: string) => {
    navigate(route);
  };

  const renderCards = () =>
    cards.map((card) => {
      return (
        <ActionAreaCard
          key={card.title}
          margin="5px 20px"
          description={card.description}
          title={card.title}
          icon={card.icon}
          onClick={() => redirectTo(card.route)}
        ></ActionAreaCard>
      );
    });
  return (
    <div className="flex-row-center flex-row-middle home-page-container">
      {renderCards()}
    </div>
  );
}

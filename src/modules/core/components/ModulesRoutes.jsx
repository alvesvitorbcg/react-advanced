import { ReactComponent as HouseGrayIcon } from './../../../shared/icons/house-gray.svg';
import { ReactComponent as HouseIcon } from './../../../shared/icons/house.svg';
import { ReactComponent as PaperGrayIcon } from './../../../shared/icons/paper-gray.svg';
import { ReactComponent as PaperIcon } from './../../../shared/icons/paper.svg';
import { ReactComponent as SpeedometerGrayIcon } from './../../../shared/icons/speedometer-gray.svg';
import { ReactComponent as SpeedometerIcon } from './../../../shared/icons/speedometer.svg';

const ModulesRoutes = [
    {
      label: 'Home',
      url: '/',
      icons: [HouseGrayIcon, HouseIcon],
    },
    {
      label: 'Calendar',
      url: '/calendar',
      icons: [PaperGrayIcon, PaperIcon],
    },
    {
      label: 'Analysis',
      url: '/analysis',

      icons: [SpeedometerGrayIcon, SpeedometerIcon],
    },
];
  
 export default ModulesRoutes
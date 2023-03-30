import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import EffectivenessTable from '../../components/effectiveness-table/EffectivenessTable';
import CampaignsData from '../../../../dummy_data/campaign_matrix.json';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Efficiency Matrix" {...a11yProps(0)} />
            <Tab label="Detailed Table" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography align="left" fontWeight="bold">
            Campaign Effectiveness Matrix
          </Typography>
          <EffectivenessTable
            campaigns={CampaignsData}
            sx={{
              marginTop: 4,
            }}
          ></EffectivenessTable>
          <LineChart width={500} height={300} data={[{ name: 'A', age: 20 }]}>
            <XAxis dataKey="name" />
            <YAxis dataKey="age" />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="age" stroke="#8884d8" />
            <Line type="monotone" dataKey="name" stroke="#82ca9d" />
          </LineChart>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography align="left" fontWeight="bold">
            Metrics
          </Typography>
        </TabPanel>
      </Box>
    </Paper>
  );
}

import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import EffectivenessTable from '../../components/effectiveness-table/EffectivenessTable';
import IMergedDetailedTableWithProducts from '../../interfaces/IProductsMergedWithDetailedData';
import DetailedDataTable from '../detailed-data-table/DetailedDataTable';
import EffectivenessGraph from '../effectiveness-table/effectiveness-graph/EffectivenessGraph';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaignMatrixData } from '../../redux/actions/http-actions';
import ICampaignData from '../../interfaces/ICampaignData';

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
const colors = ['#c31653', '#d7df3c', '#7ca893', '#54775c'];
const useCampaignMatrixData = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: any) => state.analysis.campaignMatrix);

  React.useEffect(() => {
    dispatch(fetchCampaignMatrixData() as any);
  }, [dispatch]);

  const campaignMatrixData = React.useMemo(() => {
    if (data) return data as ICampaignData[];
  }, [data]);

  return campaignMatrixData;
};

export default function CustomTabs({
  detailedTableData,
}: {
  detailedTableData: IMergedDetailedTableWithProducts;
}) {
  const campaignsData = useCampaignMatrixData();

  const [value, setValue] = React.useState(0);
  const campaigns = React.useMemo(() => {
    if (campaignsData) {
      return campaignsData.map((c, index) => ({
        ...c,
        color: colors[index],
      }));
    }
  }, [campaignsData]);

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
          {campaigns && (
            <EffectivenessTable
              campaigns={campaigns}
              sx={{
                marginTop: 4,
              }}
            ></EffectivenessTable>
          )}
          {campaigns && (
            <EffectivenessGraph campaigns={campaigns}></EffectivenessGraph>
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography align="left" fontWeight="bold" marginBottom="24px">
            Metrics
          </Typography>
          <DetailedDataTable data={detailedTableData}></DetailedDataTable>
        </TabPanel>
      </Box>
    </Paper>
  );
}

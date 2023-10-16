import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import ICampaignData from '../../../interfaces/ICampaignData';
import './EffectivenessGraph.scss';

const transformIntoNumber = (value: string) =>
  Number(value.replace(/[kK]/g, '000'));

export default function EffectivenessGraph({
  campaigns,
}: {
  campaigns: ICampaignData[];
}) {
  const data = campaigns.map((c) => ({
    name: c.classification_name,
    incrementalSales: transformIntoNumber(c.total_incremental_sales),
    incrementalMargin: transformIntoNumber(c.total_incremental_margin),
    color: c.color,
    fill: c.color,
  }));

  return (
    <>
      <div className="graph-container">
        <ResponsiveContainer>
          <BarChart
            data={data}
            height={300}
            margin={{ left: 50, right: 50, top: 100, bottom: 50 }}
          >
            <XAxis
              dataKey="name"
              label={{
                value: 'Classification',
                position: 'insideBottom',
                offset: -10,
              }}
            />
            <YAxis
              label={{
                value: 'Total Incremental Margin (€)',
                angle: -90,
                position: 'insideLeft',
                offset: -30,
              }}
            />

            <Bar dataKey="incrementalSales" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

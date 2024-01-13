import { useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../theme';
import { ResponsiveChoropleth } from '@nivo/geo'
import { geoFeatures } from '../data/mockGeoFeatures';
import { mockGeographyData as data } from '../data/mockData';


const GeographyChart = ({ isDashboard = false}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
        data={data}
        theme={{
          axis: {
            domain:{
              line:  {
                stroke: colors.grey[100]
              }
            },
            legend: {
              text:{
                fill: colors.grey[100]
              }
            },
            ticks:{
              line:{
                stroke: colors.grey[100],
                strokeWidth: 1
              },
              text: {
                fill: colors.grey[100]
              }
            }
          },
          legends: {
            text: {
              fill: colors.grey[100]
            }
          },
          tooltip:{
            container:{
              backgroundColor: colors.grey[900]
            }
          }
        }}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={ isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.49,0.6] : [ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={1.5}
        borderColor="#152538"
        legends={ isDashboard ? undefined : [
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 100,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 95,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 15,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: colors.grey[500],
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
  );
}

export default GeographyChart;
import React from 'react';
import { Chart, Pie, Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import classes from './Page1.module.css';

Chart.plugins.unregister(ChartDataLabels);

const Page1 = ({ data }) => {
  return (
    <React.Fragment>
      {data !== null && data ? (
        <React.Fragment>
          <span className={classes.pageTitle}>{data.title}</span>

          <div className={classes.container}>
            <div className={classes.Box_wrapper}>
              <div className={classes.Box}>
                <h2>Box1</h2>
                <p> {data.Content.BoxContent.Box1}</p>
                <p> {data.Content.BoxContent.Box1}</p>
              </div>
              <div className={classes.Box}>
                <h2>Box2</h2>
                <p> {data.Content.BoxContent.Box2}</p>
              </div>
              <div className={classes.Box}>
                <h2>Box3</h2>
                <p> {data.Content.BoxContent.Box3}</p>
              </div>
            </div>
            <div className={classes.chart_wrapper}>
              <div className={`${classes.chart} ${classes.pie_chart}`}>
                <p className={classes.chart_title}> Pie chart</p>
                <Pie
                  data={{ datasets: data.Content.PieChartContent.datasets }}
                  plugins={[ChartDataLabels]}
                  options={{
                    // title: {
                    //   display: true,
                    //   text: 'Average Rainfall per month',
                    //   fontSize: 20,
                    //   position: 'top',
                    // },
                    tooltips: { enabled: false },
                    hover: { mode: null },
                    legend: {
                      display: false,
                    },
                    plugins: {
                      datalabels: {
                        formatter: function (value, context) {
                          return value + '%';
                        },
                        display: true,
                        color: 'white',
                        font: {
                          weight: 'bold',
                          size: 18,
                        },
                      },
                    },
                    rotation: 5 * Math.PI - (50 / 180) * Math.PI,
                  }}
                />
              </div>
              <div className={`${classes.chart} ${classes.bar_chart}`}>
                <p className={classes.chart_title}> Bar chart</p>
                <Bar
                  data={data.Content.BarChartContent}
                  plugins={[ChartDataLabels]}
                  options={{
                    legend: {
                      display: false,
                    },
                    tooltips: { enabled: false },
                    hover: { mode: null },
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 6000,
                            stepSize: 1000,
                          },
                        },
                      ],
                    },
                    plugins: {
                      datalabels: {
                        backgroundColor: '#FF875B',
                        display: 'auto',
                        color: 'white',
                        textAlign: 'center',
                        font: {
                          weight: 'bold',
                          size: 12,
                        },
                        anchor: 'end',
                        borderWidth: '2',
                        align: 'top',
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div>Loading</div>
      )}
    </React.Fragment>
  );
};

export default Page1;

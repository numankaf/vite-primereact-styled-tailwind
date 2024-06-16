import { ChartData, ChartOptions } from 'chart.js';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { TabPanel, TabView } from 'primereact/tabview';
import { useEffect, useState } from 'react';

const Showcase = () => {
  const [options, setOptions] = useState<any>({});
  const [data, setChartData] = useState<any>({});
  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor =
      documentStyle.getPropertyValue('--text-color') || '#495057';
    const textColorSecondary =
      documentStyle.getPropertyValue('--text-color-secondary') || '#6c757d';
    const surfaceBorder =
      documentStyle.getPropertyValue('--surface-border') || '#dfe7ef';
    const barData: ChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor:
            documentStyle.getPropertyValue('--primary-500') || '#6366f1',
          borderColor:
            documentStyle.getPropertyValue('--primary-500') || '#6366f1',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor:
            documentStyle.getPropertyValue('--primary-200') || '#bcbdf9',
          borderColor:
            documentStyle.getPropertyValue('--primary-200') || '#bcbdf9',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    const barOptions: ChartOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: '500',
            },
          },
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
          border: {
            display: false,
          },
        },
      },
    };

    const pieData: ChartData = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue('--indigo-500') || '#6366f1',
            documentStyle.getPropertyValue('--purple-500') || '#a855f7',
            documentStyle.getPropertyValue('--teal-500') || '#14b8a6',
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--indigo-400') || '#8183f4',
            documentStyle.getPropertyValue('--purple-400') || '#b975f9',
            documentStyle.getPropertyValue('--teal-400') || '#41c5b7',
          ],
        },
      ],
    };

    const pieOptions: ChartOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };

    const lineData: ChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor:
            documentStyle.getPropertyValue('--primary-500') || '#6366f1',
          borderColor:
            documentStyle.getPropertyValue('--primary-500') || '#6366f1',
          tension: 0.4,
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor:
            documentStyle.getPropertyValue('--primary-200') || '#bcbdf9',
          borderColor:
            documentStyle.getPropertyValue('--primary-200') || '#bcbdf9',
          tension: 0.4,
        },
      ],
    };

    const lineOptions: ChartOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
          border: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
          border: {
            display: false,
          },
        },
      },
    };

    const polarData: ChartData = {
      datasets: [
        {
          data: [11, 16, 7, 3],
          backgroundColor: [
            documentStyle.getPropertyValue('--indigo-500') || '#6366f1',
            documentStyle.getPropertyValue('--purple-500') || '#a855f7',
            documentStyle.getPropertyValue('--teal-500') || '#14b8a6',
            documentStyle.getPropertyValue('--orange-500') || '#f97316',
          ],
          label: 'My dataset',
        },
      ],
      labels: ['Indigo', 'Purple', 'Teal', 'Orange'],
    };

    const polarOptions: ChartOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    const radarData: ChartData = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running',
      ],
      datasets: [
        {
          label: 'My First dataset',
          borderColor:
            documentStyle.getPropertyValue('--indigo-400') || '#8183f4',
          pointBackgroundColor:
            documentStyle.getPropertyValue('--indigo-400') || '#8183f4',
          pointBorderColor:
            documentStyle.getPropertyValue('--indigo-400') || '#8183f4',
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor:
            documentStyle.getPropertyValue('--indigo-400') || '#8183f4',
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          borderColor:
            documentStyle.getPropertyValue('--purple-400') || '#b975f9',
          pointBackgroundColor:
            documentStyle.getPropertyValue('--purple-400') || '#b975f9',
          pointBorderColor:
            documentStyle.getPropertyValue('--purple-400') || '#b975f9',
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor:
            documentStyle.getPropertyValue('--purple-400') || '#b975f9',
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    };

    const radarOptions: ChartOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary,
          },
        },
      },
    };

    setOptions({
      barOptions,
      pieOptions,
      lineOptions,
      polarOptions,
      radarOptions,
    });
    setChartData({
      barData,
      pieData,
      lineData,
      polarData,
      radarData,
    });
  }, []);

  return (
    <>
      <div className="flex gap-3 px-3">
        <div className="card w-1/2 space-y-10">
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button label="Primary" raised />
            <Button label="Secondary" severity="secondary" raised />
            <Button label="Success" severity="success" raised />
            <Button label="Info" severity="info" raised />
            <Button label="Warning" severity="warning" raised />
            <Button label="Help" severity="help" raised />
            <Button label="Danger" severity="danger" raised />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button label="Primary" text />
            <Button label="Secondary" severity="secondary" text />
            <Button label="Success" severity="success" text />
            <Button label="Info" severity="info" text />
            <Button label="Warning" severity="warning" text />
            <Button label="Help" severity="help" text />
            <Button label="Danger" severity="danger" text />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button label="Primary" outlined />
            <Button label="Secondary" severity="secondary" outlined />
            <Button label="Success" severity="success" outlined />
            <Button label="Info" severity="info" outlined />
            <Button label="Warning" severity="warning" outlined />
            <Button label="Help" severity="help" outlined />
            <Button label="Danger" severity="danger" outlined />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button label="Primary" rounded />
            <Button label="Secondary" severity="secondary" rounded />
            <Button label="Success" severity="success" rounded />
            <Button label="Info" severity="info" rounded />
            <Button label="Warning" severity="warning" rounded />
            <Button label="Help" severity="help" rounded />
            <Button label="Danger" severity="danger" rounded />
          </div>
        </div>
        <div className="card w-1/2 space-y-10">
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <div className="flex gap-3 w-full">
              <InputText
                type="text"
                placeholder="Default"
                className="w-1/3"
              ></InputText>
              <InputText
                type="text"
                placeholder="Disabled"
                disabled
                className="w-1/3"
              ></InputText>
              <InputText
                type="text"
                placeholder="Invalid"
                className="p-invalid w-1/3"
              />
            </div>
          </div>
          <InputTextarea
            placeholder="Your Message"
            className="w-full"
            cols={30}
          />
        </div>
      </div>
      <div className="flex gap-3 px-3">
        <div className="card w-1/2 space-y-10">
          <Accordion activeIndex={0}>
            <AccordionTab header="Header I">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionTab>
            <AccordionTab header="Header II">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
            </AccordionTab>
            <AccordionTab header="Header III">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </AccordionTab>
          </Accordion>
          <TabView>
            <TabPanel header="Header I">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel header="Header II">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
            </TabPanel>
            <TabPanel header="Header III">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </TabPanel>
          </TabView>
        </div>
        <div className="card w-1/2 space-y-10">
          <h5>Linear Chart</h5>
          <Chart
            type="line"
            data={data.lineData}
            options={options.lineOptions}
          ></Chart>
        </div>
      </div>
      <div className="flex gap-3 px-3">
        <div className="card w-1/2 space-y-10">
          <h5>Bar Chart</h5>
          <Chart
            type="bar"
            data={data.barData}
            options={options.barOptions}
          ></Chart>
        </div>
        <div className="card w-1/2 space-y-10">
          <h5 className="text-left w-full">Pie Chart</h5>
          <Chart
            className="w-2/4"
            type="pie"
            data={data.pieData}
            options={options.pieOptions}
          ></Chart>
        </div>
      </div>
    </>
  );
};

export default Showcase;

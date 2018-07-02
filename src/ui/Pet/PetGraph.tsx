import { Axis, Chart, Geom, Legend, Tooltip } from 'bizcharts';
import React, { Component } from 'react';

interface IPet {
  name: string;
  age: number;
  key: number
}

interface IPetProp {
  data?: IPet[];
}


class PetGraph extends Component<IPetProp> {

  public render() {

    const cols = {
      age: { alias: 'Age' },
      name: { alias: 'Pet Name' }
    };

    const bizG2 = (g2Chart: any) => (g2Chart);

    return (
      <div>
        <Chart width={600} height={400} data={this.props.data} scale={cols}>
          <Axis name='name' />
          <Axis name='age' />
          <Legend />
          <Tooltip />
          <Geom type='interval' position='name*age' color='name' />
        </Chart>
        <Chart width={600} height={400} data={this.props.data}
          scale={cols} onGetG2Instance={bizG2}>
          <Legend />
          <Tooltip crosshairs={{ type: 'y' }} />
          <Axis />
          <Geom type='area' position='name*age' color='prop' shape='smooth' />
          <Geom type='line' position='name*age' color='prop' shape='smooth' size={2} />
        </Chart>

        <Chart width={600} height={400} data={this.props.data} scale={cols} >
          <Legend />
          <Axis name='name' />
          <Axis name='age' />
          <Tooltip crosshairs={{ type: 'y' }} />
          <Geom type='line' position='name*age' size={2} />
          <Geom type='point' position='name*age' size={4} shape={'circle'} style={{ stroke: '#fff', lineWidth: 1 }} />
        </Chart>
      </div>
    )
  }

}

export default PetGraph;

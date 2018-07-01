import { Axis, Chart, Geom, Tooltip } from 'bizcharts';
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

    return (
      <div>
        <Chart width={600} height={400} data={this.props.data} scale={cols}>
          <Axis name='name' />
          <Axis name='age' />
          <Tooltip />
          <Geom type='interval' position='name*age' color='name' />
        </Chart>
        <Chart width={600} height={400} data={this.props.data} scale={cols} onGetG2Instance={(g2Chart) => g2Chart /*this is needed for realtime update*/}>
          <Tooltip crosshairs={{ type: "y" }} />
          <Axis />
          <Geom type="area" position="name*age" color="prop" shape="smooth" />
          <Geom type="line" position="name*age" color="prop" shape="smooth" size={2} />
        </Chart>
      </div>
    )
  }

}

export default PetGraph;

// export default UserList;


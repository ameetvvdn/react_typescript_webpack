import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import Environment from '../../relayEnviroment';
import PetGraph from './PetGraph';

const PetPageQuery = graphql`
  query PetPageQuery {
    pets(limit: 5){
      key
      name
      age
    }
  }
`

class PetPage extends Component<{}, {}> {
  render() {
    const renderPage = ({ error, props }: any) => {
      if (error) {
        return <div>{error.message}</div>
      } else if (props) {
        return <PetGraph data={props.pets} />
      }
      return <div>Loading</div>
    };
    return (
      <QueryRenderer
        environment={Environment}
        query={PetPageQuery}
        render={renderPage}
      />
    )
  }

}

export default PetPage;

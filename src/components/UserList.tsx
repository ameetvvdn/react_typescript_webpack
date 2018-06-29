import React, { Component } from 'react';
import {
    createFragmentContainer,
    graphql
} from 'relay-runtime';
import User from './User';

class UserList extends Component <any, any> {

  public render() {
    return (
      <div>
        {this.props.viewer.allLinks.edges.map(({node}: any) =>
          <User key={node.__id} link={node} />
      )}
      </div>
    )
  }

}

export default createFragmentContainer(UserList, graphql`
  fragment UserList_viewer on Query  {
    users(limit: 10){
        
          ...User_user
     
    }
  }
`)

// export default UserList;


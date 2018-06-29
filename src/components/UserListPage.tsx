import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../relayEnviroment';
import UserList from './UserList';

const UserListPageQuery = graphql`
  query UserListPageQuery {
    
      ...UserList_viewer
    
  }
`

class UserListPage extends Component <any, any> {

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={UserListPageQuery}
        render={({ error, props }: any) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <UserList  />
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default UserListPage;

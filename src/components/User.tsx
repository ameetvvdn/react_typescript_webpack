import React, { Component } from 'react';
import {
    createFragmentContainer,
    graphql
  } from 'relay-runtime';

interface IUserData {
    link: ILink
};

interface ILink {
    firstname: string,
    lastname: string
};


class User extends Component <IUserData, {}> {
    public render() {
        return (
            <div className='App'>
                <div>
                    <div>{this.props.link.firstname} ({this.props.link.lastname})</div>
                </div>
            </div>
        );
    }
}

const abcc = graphql`
fragment User_user on User {
  id
  firstName
  lastName
}
`

export default createFragmentContainer(User, abcc )

// export default User;

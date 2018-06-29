/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UserListPageQueryVariables = {};
export type UserListPageQueryResponse = {};



/*
query UserListPageQuery {
  ...UserList_viewer
}

fragment UserList_viewer on Query {
  users(limit: 10) {
    ...User_user
    id
  }
}

fragment User_user on User {
  id
  firstName
  lastName
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "operationKind": "query",
  "name": "UserListPageQuery",
  "id": null,
  "text": "query UserListPageQuery {\n  ...UserList_viewer\n}\n\nfragment UserList_viewer on Query {\n  users(limit: 10) {\n    ...User_user\n    id\n  }\n}\n\nfragment User_user on User {\n  id\n  firstName\n  lastName\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "UserList_viewer",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserListPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": "users(limit:10)",
        "args": [
          {
            "kind": "Literal",
            "name": "limit",
            "value": 10,
            "type": "Int"
          }
        ],
        "concreteType": "User",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "firstName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lastName",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
(node as any).hash = '11865ad433c96b6f38e82e1d8db531ae';
export default node;

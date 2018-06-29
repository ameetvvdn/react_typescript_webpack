/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type UserList_viewer = {
    readonly users: ReadonlyArray<({}) | null> | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "UserList_viewer",
  "type": "Query",
  "metadata": null,
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
          "kind": "FragmentSpread",
          "name": "User_user",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = '41fd3b965304f42a7b0d85a51719d3c7';
export default node;

/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type User_user = {
    readonly id: string | null;
    readonly firstName: string | null;
    readonly lastName: string | null;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "User_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
};
(node as any).hash = 'cf38c20777b261863efc9f969633cec1';
export default node;

/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type PetPageQueryVariables = {};
export type PetPageQueryResponse = {
    readonly pets: ReadonlyArray<({
        readonly key: number | null;
        readonly name: string | null;
        readonly age: number | null;
    }) | null> | null;
};



/*
query PetPageQuery {
  pets(limit: 5) {
    key
    name
    age
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "limit",
    "value": 5,
    "type": "Int"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "key",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "age",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PetPageQuery",
  "id": null,
  "text": "query PetPageQuery {\n  pets(limit: 5) {\n    key\n    name\n    age\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PetPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pets",
        "storageKey": "pets(limit:5)",
        "args": v0,
        "concreteType": "Pet",
        "plural": true,
        "selections": [
          v1,
          v2,
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PetPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pets",
        "storageKey": "pets(limit:5)",
        "args": v0,
        "concreteType": "Pet",
        "plural": true,
        "selections": [
          v1,
          v2,
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
(node as any).hash = '8e454c94e6b779d942bc3716aea347f2';
export default node;

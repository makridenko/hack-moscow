/**
 * @flow
 * @relayHash 6cc02d5cc50e22a7544195586d5d160e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserInfoBlockQueryVariables = {||};
export type UserInfoBlockQueryResponse = {|
  +userInfos: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +firstName: string,
        +lastName: string,
        +rating: number,
      |}
    |}>
  |}
|};
export type UserInfoBlockQuery = {|
  variables: UserInfoBlockQueryVariables,
  response: UserInfoBlockQueryResponse,
|};
*/


/*
query UserInfoBlockQuery {
  userInfos {
    edges {
      node {
        id
        firstName
        lastName
        rating
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "userInfos",
    "storageKey": null,
    "args": null,
    "concreteType": "UserInfoNodeConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "UserInfoNodeEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "UserInfoNode",
            "plural": false,
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "rating",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserInfoBlockQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserInfoBlockQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserInfoBlockQuery",
    "id": null,
    "text": "query UserInfoBlockQuery {\n  userInfos {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        rating\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6eb724b0a4a127ca2d7a35509241fc89';
module.exports = node;

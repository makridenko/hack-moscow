/**
 * @flow
 * @relayHash d58264a810c5f2792bae0bc3171ed9cb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserInfoBlockQueryVariables = {|
  username: string
|};
export type UserInfoBlockQueryResponse = {|
  +userInfos: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +firstName: string,
        +lastName: string,
        +experience: number,
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
query UserInfoBlockQuery(
  $username: String!
) {
  userInfos(user_Username: $username) {
    edges {
      node {
        id
        firstName
        lastName
        experience
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "userInfos",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "user_Username",
        "variableName": "username"
      }
    ],
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
                "name": "experience",
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
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserInfoBlockQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserInfoBlockQuery",
    "id": null,
    "text": "query UserInfoBlockQuery(\n  $username: String!\n) {\n  userInfos(user_Username: $username) {\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        experience\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'af4e9db03e4fad2c7f9c36f6567acb56';
module.exports = node;

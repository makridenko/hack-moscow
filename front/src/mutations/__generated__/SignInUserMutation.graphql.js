/**
 * @flow
 * @relayHash 5381dfe72b0c104b4ea791ce5f97fd21
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInUserMutationVariables = {|
  username: string,
  password: string,
|};
export type SignInUserMutationResponse = {|
  +login: ?{|
    +user: ?{|
      +id: string,
      +username: string,
    |}
  |},
  +tokenAuth: ?{|
    +token: ?string
  |},
|};
export type SignInUserMutation = {|
  variables: SignInUserMutationVariables,
  response: SignInUserMutationResponse,
|};
*/


/*
mutation SignInUserMutation(
  $username: String!
  $password: String!
) {
  login(username: $username, password: $password) {
    user {
      id
      username
    }
  }
  tokenAuth(username: $username, password: $password) {
    token
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
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "password",
    "variableName": "password"
  },
  {
    "kind": "Variable",
    "name": "username",
    "variableName": "username"
  }
],
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "login",
    "storageKey": null,
    "args": (v1/*: any*/),
    "concreteType": "UserLogIn",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "UserNode",
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
            "name": "username",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "tokenAuth",
    "storageKey": null,
    "args": (v1/*: any*/),
    "concreteType": "ObtainJSONWebToken",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SignInUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SignInUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SignInUserMutation",
    "id": null,
    "text": "mutation SignInUserMutation(\n  $username: String!\n  $password: String!\n) {\n  login(username: $username, password: $password) {\n    user {\n      id\n      username\n    }\n  }\n  tokenAuth(username: $username, password: $password) {\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f483172a31c15ad6767659b141f1e717';
module.exports = node;

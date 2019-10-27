/**
 * @flow
 * @relayHash bf69d83eeb8edf868d1bfcd836fc5b35
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TestMutationInput = {|
  lessonId?: ?string,
  tasks?: ?$ReadOnlyArray<?boolean>,
  clientMutationId?: ?string,
|};
export type TestMutationVariables = {|
  input: TestMutationInput
|};
export type TestMutationResponse = {|
  +testMutation: ?{|
    +user: ?{|
      +username: string
    |}
  |}
|};
export type TestMutation = {|
  variables: TestMutationVariables,
  response: TestMutationResponse,
|};
*/


/*
mutation TestMutation(
  $input: TestMutationInput!
) {
  testMutation(input: $input) {
    user {
      username
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "TestMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TestMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "testMutation",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TestMutationPayload",
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
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TestMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "testMutation",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TestMutationPayload",
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
              (v2/*: any*/),
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
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "TestMutation",
    "id": null,
    "text": "mutation TestMutation(\n  $input: TestMutationInput!\n) {\n  testMutation(input: $input) {\n    user {\n      username\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '298b35792bd57d07dc3f2c2f2a7a3ab4';
module.exports = node;

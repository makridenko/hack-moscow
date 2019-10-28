/**
 * @flow
 * @relayHash 6f24b074b6caee63dbc277703e8f667b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FirstScenarioMutationInput = {|
  lessonId?: ?string,
  tasks?: ?$ReadOnlyArray<?boolean>,
  clientMutationId?: ?string,
|};
export type FirstScenarioMutationVariables = {|
  input: FirstScenarioMutationInput
|};
export type FirstScenarioMutationResponse = {|
  +firstScenario: ?{|
    +user: ?{|
      +username: string
    |}
  |}
|};
export type FirstScenarioMutation = {|
  variables: FirstScenarioMutationVariables,
  response: FirstScenarioMutationResponse,
|};
*/


/*
mutation FirstScenarioMutation(
  $input: FirstScenarioMutationInput!
) {
  firstScenario(input: $input) {
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
    "type": "FirstScenarioMutationInput!",
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
    "name": "FirstScenarioMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "firstScenario",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FirstScenarioMutationPayload",
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
    "name": "FirstScenarioMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "firstScenario",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FirstScenarioMutationPayload",
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
    "name": "FirstScenarioMutation",
    "id": null,
    "text": "mutation FirstScenarioMutation(\n  $input: FirstScenarioMutationInput!\n) {\n  firstScenario(input: $input) {\n    user {\n      username\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eebc23fb4782ee46f412159ec518ba67';
module.exports = node;

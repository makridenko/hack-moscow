/**
 * @flow
 * @relayHash 5f697b29aa810966bdeec4c6b93deafc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TopicsBlockQueryVariables = {||};
export type TopicsBlockQueryResponse = {|
  +lessons: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +title: string,
      |}
    |}>
  |}
|};
export type TopicsBlockQuery = {|
  variables: TopicsBlockQueryVariables,
  response: TopicsBlockQueryResponse,
|};
*/


/*
query TopicsBlockQuery {
  lessons {
    edges {
      node {
        id
        title
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
    "name": "lessons",
    "storageKey": null,
    "args": null,
    "concreteType": "LessonNodeConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "LessonNodeEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "LessonNode",
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
                "name": "title",
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
    "name": "TopicsBlockQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TopicsBlockQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "TopicsBlockQuery",
    "id": null,
    "text": "query TopicsBlockQuery {\n  lessons {\n    edges {\n      node {\n        id\n        title\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '48a88996c7c47c531c7707c66257e3c3';
module.exports = node;

/**
 * @flow
 * @relayHash 8425132185a28a6ae9965f7536b2db6e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TopicsBlockQueryVariables = {||};
export type TopicsBlockQueryResponse = {|
  +units: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +title: string,
        +subject: {|
          +title: string
        |},
        +lessonSet: ?{|
          +edges: $ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +title: string,
            |}
          |}>
        |},
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
  units {
    edges {
      node {
        id
        title
        subject {
          title
          id
        }
        lessonSet {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "lessonSet",
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
            (v0/*: any*/),
            (v1/*: any*/)
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TopicsBlockQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "units",
        "storageKey": null,
        "args": null,
        "concreteType": "UnitNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UnitNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "UnitNode",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "subject",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubjectNode",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/)
                    ]
                  },
                  (v2/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TopicsBlockQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "units",
        "storageKey": null,
        "args": null,
        "concreteType": "UnitNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UnitNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "UnitNode",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "subject",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubjectNode",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v0/*: any*/)
                    ]
                  },
                  (v2/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TopicsBlockQuery",
    "id": null,
    "text": "query TopicsBlockQuery {\n  units {\n    edges {\n      node {\n        id\n        title\n        subject {\n          title\n          id\n        }\n        lessonSet {\n          edges {\n            node {\n              id\n              title\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '16997dcbd73fa88cd6d066ce4401b079';
module.exports = node;

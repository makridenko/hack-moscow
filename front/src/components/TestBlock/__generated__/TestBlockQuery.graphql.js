/**
 * @flow
 * @relayHash 3f0e1cfe8e2c2d93597740d45035ca7f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TestBlockQueryVariables = {||};
export type TestBlockQueryResponse = {|
  +tasks: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +lesson: {|
          +title: string
        |},
        +description: string,
        +answerSet: ?{|
          +edges: $ReadOnlyArray<?{|
            +node: ?{|
              +title: string,
              +isTrue: boolean,
            |}
          |}>
        |},
      |}
    |}>
  |}
|};
export type TestBlockQuery = {|
  variables: TestBlockQueryVariables,
  response: TestBlockQueryResponse,
|};
*/


/*
query TestBlockQuery {
  tasks {
    edges {
      node {
        lesson {
          title
          id
        }
        description
        answerSet {
          edges {
            node {
              title
              isTrue
              id
            }
          }
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isTrue",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TestBlockQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tasks",
        "storageKey": null,
        "args": null,
        "concreteType": "TaskNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "TaskNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "TaskNode",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "lesson",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LessonNode",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/)
                    ]
                  },
                  (v1/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "answerSet",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AnswerNodeConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AnswerNodeEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "AnswerNode",
                            "plural": false,
                            "selections": [
                              (v0/*: any*/),
                              (v2/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  }
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
    "name": "TestBlockQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tasks",
        "storageKey": null,
        "args": null,
        "concreteType": "TaskNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "TaskNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "TaskNode",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "lesson",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LessonNode",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v3/*: any*/)
                    ]
                  },
                  (v1/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "answerSet",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AnswerNodeConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AnswerNodeEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "AnswerNode",
                            "plural": false,
                            "selections": [
                              (v0/*: any*/),
                              (v2/*: any*/),
                              (v3/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  (v3/*: any*/)
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
    "name": "TestBlockQuery",
    "id": null,
    "text": "query TestBlockQuery {\n  tasks {\n    edges {\n      node {\n        lesson {\n          title\n          id\n        }\n        description\n        answerSet {\n          edges {\n            node {\n              title\n              isTrue\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '66585c29493497dbfd11f7ec81dad74c';
module.exports = node;

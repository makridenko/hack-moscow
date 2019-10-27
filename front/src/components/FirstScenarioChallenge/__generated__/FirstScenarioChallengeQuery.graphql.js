/**
 * @flow
 * @relayHash 2c4ece5ac024f1409354f5f2820d6be4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FirstScenarioChallengeQueryVariables = {||};
export type FirstScenarioChallengeQueryResponse = {|
  +tasks: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +description: string,
        +lesson: {|
          +id: string,
          +title: string,
        |},
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
export type FirstScenarioChallengeQuery = {|
  variables: FirstScenarioChallengeQueryVariables,
  response: FirstScenarioChallengeQueryResponse,
|};
*/


/*
query FirstScenarioChallengeQuery {
  tasks(lesson_Id: "TGVzc29uTm9kZTox") {
    edges {
      node {
        description
        lesson {
          id
          title
        }
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
var v0 = [
  {
    "kind": "Literal",
    "name": "lesson_Id",
    "value": "TGVzc29uTm9kZTox"
  }
],
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "lesson",
  "storageKey": null,
  "args": null,
  "concreteType": "LessonNode",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/)
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isTrue",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FirstScenarioChallengeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tasks",
        "storageKey": "tasks(lesson_Id:\"TGVzc29uTm9kZTox\")",
        "args": (v0/*: any*/),
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
                  (v1/*: any*/),
                  (v4/*: any*/),
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
                              (v3/*: any*/),
                              (v5/*: any*/)
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
    "name": "FirstScenarioChallengeQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tasks",
        "storageKey": "tasks(lesson_Id:\"TGVzc29uTm9kZTox\")",
        "args": (v0/*: any*/),
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
                  (v1/*: any*/),
                  (v4/*: any*/),
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
                              (v3/*: any*/),
                              (v5/*: any*/),
                              (v2/*: any*/)
                            ]
                          }
                        ]
                      }
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
    "name": "FirstScenarioChallengeQuery",
    "id": null,
    "text": "query FirstScenarioChallengeQuery {\n  tasks(lesson_Id: \"TGVzc29uTm9kZTox\") {\n    edges {\n      node {\n        description\n        lesson {\n          id\n          title\n        }\n        answerSet {\n          edges {\n            node {\n              title\n              isTrue\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2d74088e3eff857895bdee34d21bbd15';
module.exports = node;

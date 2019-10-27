/**
 * @flow
 * @relayHash 3b05c552f6e1d8da09dfd9f3f60c86d6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TestPageQueryVariables = {|
  id: string
|};
export type TestPageQueryResponse = {|
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
export type TestPageQuery = {|
  variables: TestPageQueryVariables,
  response: TestPageQueryResponse,
|};
*/


/*
query TestPageQuery(
  $id: ID!
) {
  tasks(lesson_Id: $id) {
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
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "lesson_Id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "lesson",
  "storageKey": null,
  "args": null,
  "concreteType": "LessonNode",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/)
  ]
},
v6 = {
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
    "name": "TestPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tasks",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v5/*: any*/),
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
                              (v4/*: any*/),
                              (v6/*: any*/)
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
    "name": "TestPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tasks",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v5/*: any*/),
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
                              (v4/*: any*/),
                              (v6/*: any*/),
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
    "name": "TestPageQuery",
    "id": null,
    "text": "query TestPageQuery(\n  $id: ID!\n) {\n  tasks(lesson_Id: $id) {\n    edges {\n      node {\n        description\n        lesson {\n          id\n          title\n        }\n        answerSet {\n          edges {\n            node {\n              title\n              isTrue\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '16adec362a55dd7ce09d7cf9e9d9b7b5';
module.exports = node;

/**
 * @flow
 * @relayHash 5f3bc7726895465466ffcf2080a745fa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ArticleBlockQueryVariables = {||};
export type ArticleBlockQueryResponse = {|
  +lessons: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +title: string,
        +theory: string,
      |}
    |}>
  |}
|};
export type ArticleBlockQuery = {|
  variables: ArticleBlockQueryVariables,
  response: ArticleBlockQueryResponse,
|};
*/


/*
query ArticleBlockQuery {
  lessons {
    edges {
      node {
        id
        title
        theory
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "theory",
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
    "name": "ArticleBlockQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticleBlockQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ArticleBlockQuery",
    "id": null,
    "text": "query ArticleBlockQuery {\n  lessons {\n    edges {\n      node {\n        id\n        title\n        theory\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '37232ef31ee1941f87ef193d55660527';
module.exports = node;

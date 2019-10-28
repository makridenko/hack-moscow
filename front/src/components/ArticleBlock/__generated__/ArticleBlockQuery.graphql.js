/**
 * @flow
 * @relayHash 763aa3453e8ddb3a97deed7314fdbd91
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ArticleBlockQueryVariables = {|
  id: string
|};
export type ArticleBlockQueryResponse = {|
  +unit: ?{|
    +id: string,
    +title: string,
    +theory: string,
  |}
|};
export type ArticleBlockQuery = {|
  variables: ArticleBlockQueryVariables,
  response: ArticleBlockQueryResponse,
|};
*/


/*
query ArticleBlockQuery(
  $id: ID!
) {
  unit(id: $id) {
    id
    title
    theory
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
    "kind": "LinkedField",
    "alias": null,
    "name": "unit",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "UnitNode",
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ArticleBlockQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ArticleBlockQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ArticleBlockQuery",
    "id": null,
    "text": "query ArticleBlockQuery(\n  $id: ID!\n) {\n  unit(id: $id) {\n    id\n    title\n    theory\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e72848a70efab3572b942b21792e9468';
module.exports = node;

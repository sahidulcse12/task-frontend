/**
 * @generated SignedSource<<08c8f38b917017fed23a064d6af70c1b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TaskListQuery$variables = Record<PropertyKey, never>;
export type TaskListQuery$data = {
  readonly allTasks: ReadonlyArray<{
    readonly description: string | null | undefined;
    readonly id: any;
    readonly status: string | null | undefined;
    readonly title: string;
  }>;
};
export type TaskListQuery = {
  response: TaskListQuery$data;
  variables: TaskListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TaskItem",
    "kind": "LinkedField",
    "name": "allTasks",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TaskListQuery",
    "selections": (v0/*: any*/),
    "type": "TaskQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TaskListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "13b9bffe465a795872c7e6c25879dfd3",
    "id": null,
    "metadata": {},
    "name": "TaskListQuery",
    "operationKind": "query",
    "text": "query TaskListQuery {\n  allTasks {\n    id\n    title\n    description\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "ac398c6f4505a7bfeef13a07664ad609";

export default node;

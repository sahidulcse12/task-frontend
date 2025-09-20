/**
 * @generated SignedSource<<5fb3be20c85638df0611a84f9fea5fbe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TaskFormCreateTaskMutation$variables = {
  description: string;
  title: string;
};
export type TaskFormCreateTaskMutation$data = {
  readonly createTask: {
    readonly description: string | null | undefined;
    readonly id: any;
    readonly status: string | null | undefined;
    readonly title: string;
  };
};
export type TaskFormCreateTaskMutation = {
  response: TaskFormCreateTaskMutation$data;
  variables: TaskFormCreateTaskMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "TaskItem",
    "kind": "LinkedField",
    "name": "createTask",
    "plural": false,
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TaskFormCreateTaskMutation",
    "selections": (v2/*: any*/),
    "type": "TaskMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TaskFormCreateTaskMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f9b0d8df645bea431455431c511daebd",
    "id": null,
    "metadata": {},
    "name": "TaskFormCreateTaskMutation",
    "operationKind": "mutation",
    "text": "mutation TaskFormCreateTaskMutation(\n  $title: String!\n  $description: String!\n) {\n  createTask(title: $title, description: $description) {\n    id\n    title\n    description\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "c228b23da1e22a553c08ecf95df7c996";

export default node;

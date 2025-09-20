/**
 * @generated SignedSource<<2d100d2cff6d279669b733c815d4b387>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TaskItemUpdateStatusMutation$variables = {
  id: any;
  status: string;
};
export type TaskItemUpdateStatusMutation$data = {
  readonly updateTaskStatus: {
    readonly id: any;
    readonly status: string | null | undefined;
  } | null | undefined;
};
export type TaskItemUpdateStatusMutation = {
  response: TaskItemUpdateStatusMutation$data;
  variables: TaskItemUpdateStatusMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "status"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "status",
        "variableName": "status"
      }
    ],
    "concreteType": "TaskItem",
    "kind": "LinkedField",
    "name": "updateTaskStatus",
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
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TaskItemUpdateStatusMutation",
    "selections": (v1/*: any*/),
    "type": "TaskMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TaskItemUpdateStatusMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c952c8ee7065ea3f2f20ddf4abc4b8e2",
    "id": null,
    "metadata": {},
    "name": "TaskItemUpdateStatusMutation",
    "operationKind": "mutation",
    "text": "mutation TaskItemUpdateStatusMutation(\n  $id: UUID!\n  $status: String!\n) {\n  updateTaskStatus(id: $id, status: $status) {\n    id\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "238fe4a03adf9b8afa14ae6b6b75ce7e";

export default node;

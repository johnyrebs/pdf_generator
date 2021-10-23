# Workspaces Workspace Id

```ts
const workspacesWorkspaceIdController = new WorkspacesWorkspaceIdController(client);
```

## Class Name

`WorkspacesWorkspaceIdController`

## Methods

* [Get Workspace](/doc/controllers/workspaces-workspace-id.md#get-workspace)
* [Delete Workspace](/doc/controllers/workspaces-workspace-id.md#delete-workspace)


# Get Workspace

Returns workspace information

```ts
async getWorkspace(
  workspaceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<WorkspaceInformation>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | (Required) Workspace identifier |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkspaceInformation`](/doc/models/workspace-information.md)

## Example Usage

```ts
const workspaceId = 'demo.example@actualreports.com';
try {
  const { result, ...httpResponse } = await workspacesWorkspaceIdController.getWorkspace(workspaceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "response": {
    "id": 1,
    "identifier": "demo.example@actualreports.com",
    "is_master_workspace": false,
    "created_at": "2020-04-01 12:03:12"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`UnauthorizedError`](/doc/models/unauthorized-error.md) |
| 403 | Forbidden | [`ForbiddenError`](/doc/models/forbidden-error.md) |
| 404 | Not Found | [`NotFoundError`](/doc/models/not-found-error.md) |
| 422 | Unprocessable Entity (WebDAV) (RFC 4918) | [`UnprocessableEntityError`](/doc/models/unprocessable-entity-error.md) |
| 500 | Internal Server Error | [`InternalServerError`](/doc/models/internal-server-error.md) |


# Delete Workspace

Deletes the workspace

```ts
async deleteWorkspace(
  workspaceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TheRequestWasSuccessfullyExecuted>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workspaceId` | `string` | Template, Required | (Required) Workspace identifier |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TheRequestWasSuccessfullyExecuted`](/doc/models/the-request-was-successfully-executed.md)

## Example Usage

```ts
const workspaceId = 'demo.example@actualreports.com';
try {
  const { result, ...httpResponse } = await workspacesWorkspaceIdController.deleteWorkspace(workspaceId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "response": {
    "success": true
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`UnauthorizedError`](/doc/models/unauthorized-error.md) |
| 403 | Forbidden | [`ForbiddenError`](/doc/models/forbidden-error.md) |
| 404 | Not Found | [`NotFoundError`](/doc/models/not-found-error.md) |
| 422 | Unprocessable Entity (WebDAV) (RFC 4918) | [`UnprocessableEntityError`](/doc/models/unprocessable-entity-error.md) |
| 500 | Internal Server Error | [`InternalServerError`](/doc/models/internal-server-error.md) |


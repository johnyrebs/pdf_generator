# Template Id

```ts
const templateIdController = new TemplateIdController(client);
```

## Class Name

`TemplateIdController`

## Methods

* [Get Template](/doc/controllers/template-id.md#get-template)
* [Update Template](/doc/controllers/template-id.md#update-template)
* [Delete Template](/doc/controllers/template-id.md#delete-template)
* [Copy Template](/doc/controllers/template-id.md#copy-template)
* [Open Editor](/doc/controllers/template-id.md#open-editor)
* [Generate Document](/doc/controllers/template-id.md#generate-document)


# Get Template

Returns template configuration

```ts
async getTemplate(
  templateId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TemplateConfigurationAsJSONObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `number` | Template, Required | (Required) Template unique identifier |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TemplateConfigurationAsJSONObject`](/doc/models/template-configuration-as-json-object.md)

## Example Usage

```ts
const templateId = 19375;
try {
  const { result, ...httpResponse } = await templateIdController.getTemplate(templateId);
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
    "id": 24382,
    "name": "Invoice template",
    "tags": [
      "invoice",
      "orders"
    ],
    "isDraft": true,
    "layout": {
      "format": "A4",
      "width": 21,
      "height": 29.7,
      "unit": "cm",
      "orientation": "portrait",
      "rotation": 0,
      "margins": {
        "top": 0.5,
        "right": 0.5,
        "bottom": 0.5,
        "left": 0.5
      },
      "repeatLayout": {
        "format": "A4",
        "width": 21,
        "height": 29.7
      },
      "emptyLabels": 0
    },
    "pages": [
      {
        "width": 21,
        "height": 29.7,
        "margins": {
          "right": 0.5,
          "bottom": 0.5
        },
        "components": [
          {
            "cls": "labelComponent",
            "id": "component-12313",
            "width": 3.5,
            "height": 1,
            "top": 4.2,
            "left": 2.5,
            "zindex": 102,
            "value": "${price}",
            "dataIndex": "line_items"
          },
          {
            "cls": "labelComponent",
            "id": "component-12313",
            "width": 3.5,
            "height": 1,
            "top": 4.2,
            "left": 2.5,
            "zindex": 102,
            "value": "${price}",
            "dataIndex": "line_items"
          }
        ]
      },
      {
        "width": 21,
        "height": 29.7,
        "margins": {
          "right": 0.5,
          "bottom": 0.5
        },
        "components": [
          {
            "cls": "labelComponent",
            "id": "component-12313",
            "width": 3.5,
            "height": 1,
            "top": 4.2,
            "left": 2.5,
            "zindex": 102,
            "value": "${price}",
            "dataIndex": "line_items"
          },
          {
            "cls": "labelComponent",
            "id": "component-12313",
            "width": 3.5,
            "height": 1,
            "top": 4.2,
            "left": 2.5,
            "zindex": 102,
            "value": "${price}",
            "dataIndex": "line_items"
          }
        ]
      }
    ],
    "dataSettings": {},
    "editor": {
      "heightMultiplier": 2
    }
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


# Update Template

Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.

```ts
async updateTemplate(
  templateId: number,
  contentType: string,
  body: UpdateTemplateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TemplateConfigurationAsJSONObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `number` | Template, Required | (Required) Template unique identifier |
| `contentType` | `string` | Header, Required | - |
| `body` | [`UpdateTemplateRequest`](/doc/models/update-template-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TemplateConfigurationAsJSONObject`](/doc/models/template-configuration-as-json-object.md)

## Example Usage

```ts
const templateId = 19375;
const contentType = 'application/json';
const bodyTags: string[] = ['invoice', 'orders'];
const bodyLayoutMargins: Margins = {
  top: 0.5,
  right: 0.5,
  bottom: 0.5,
  left: 0.5,
};

const bodyLayoutRepeatLayout: RepeatLayout = {
  format: 'A4',
  width: 21,
  height: 29.7,
};

const bodyLayout: Layout1 = {
  format: 'A4',
  width: 21,
  height: 29.7,
  unit: 'cm',
  orientation: 'portrait',
  rotaion: 0,
  margins: bodyLayoutMargins,
  repeatLayout: bodyLayoutRepeatLayout,
  emptyLabels: 0,
};

const bodyPages: Page[] = [];

const bodypages0Margins: Margins1 = {
  right: 0.5,
  bottom: 0.5,
};

const bodypages0Components: Component[] = [];

const bodypages0components0: Component = {
  cls: 'labelComponent',
  id: 'component-12313',
  width: 3.5,
  height: 1,
  top: 4.2,
  left: 2.5,
  zindex: 102,
  value: '${price}',
  dataIndex: 'line_items',
};

bodypages0Components[0] = bodypages0components0;

const bodypages0components1: Component = {
  cls: 'labelComponent',
  id: 'component-12313',
  width: 3.5,
  height: 1,
  top: 4.2,
  left: 2.5,
  zindex: 102,
  value: '${price}',
  dataIndex: 'line_items',
};

bodypages0Components[1] = bodypages0components1;

const bodypages0: Page = {
  width: 21,
  height: 29.7,
  margins: bodypages0Margins,
  components: bodypages0Components,
};

bodyPages[0] = bodypages0;

const bodypages1Margins: Margins1 = {
  right: 0.5,
  bottom: 0.5,
};

const bodypages1Components: Component[] = [];

const bodypages1components0: Component = {
  cls: 'labelComponent',
  id: 'component-12313',
  width: 3.5,
  height: 1,
  top: 4.2,
  left: 2.5,
  zindex: 102,
  value: '${price}',
  dataIndex: 'line_items',
};

bodypages1Components[0] = bodypages1components0;

const bodypages1components1: Component = {
  cls: 'labelComponent',
  id: 'component-12313',
  width: 3.5,
  height: 1,
  top: 4.2,
  left: 2.5,
  zindex: 102,
  value: '${price}',
  dataIndex: 'line_items',
};

bodypages1Components[1] = bodypages1components1;

const bodypages1: Page = {
  width: 21,
  height: 29.7,
  margins: bodypages1Margins,
  components: bodypages1Components,
};

bodyPages[1] = bodypages1;

const body: UpdateTemplateRequest = {
  name: 'Invoice template',
  tags: bodyTags,
  isDraft: true,
  layout: bodyLayout,
  pages: bodyPages,
};

try {
  const { result, ...httpResponse } = await templateIdController.updateTemplate(templateId, contentType, body);
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
    "id": 24382,
    "name": "Invoice template",
    "tags": [
      "invoice",
      "orders"
    ],
    "isDraft": true,
    "layout": {
      "format": "A4",
      "width": 21,
      "height": 29.7,
      "unit": "cm",
      "orientation": "portrait",
      "rotation": 0,
      "margins": {
        "top": 0.5,
        "right": 0.5,
        "bottom": 0.5,
        "left": 0.5
      },
      "repeatLayout": {
        "format": "A4",
        "width": 21,
        "height": 29.7
      },
      "emptyLabels": 0
    },
    "pages": [
      {
        "width": 21,
        "height": 29.7,
        "margins": {
          "right": 0.5,
          "bottom": 0.5
        },
        "components": [
          {
            "cls": "labelComponent",
            "id": "component-12313",
            "width": 3.5,
            "height": 1,
            "top": 4.2,
            "left": 2.5,
            "zindex": 102,
            "value": "${price}",
            "dataIndex": "line_items"
          },
          {
            "cls": "labelComponent",
            "id": "component-12313",
            "width": 3.5,
            "height": 1,
            "top": 4.2,
            "left": 2.5,
            "zindex": 102,
            "value": "${price}",
            "dataIndex": "line_items"
          }
        ]
      },
      {
        "width": 21,
        "height": 29.7,
        "margins": {
          "right": 0.5,
          "bottom": 0.5
        },
        "components": [
          {
            "cls": "labelComponent",
            "id": "component-12313",
            "width": 3.5,
            "height": 1,
            "top": 4.2,
            "left": 2.5,
            "zindex": 102,
            "value": "${price}",
            "dataIndex": "line_items"
          },
          {
            "cls": "labelComponent",
            "id": "component-12313",
            "width": 3.5,
            "height": 1,
            "top": 4.2,
            "left": 2.5,
            "zindex": 102,
            "value": "${price}",
            "dataIndex": "line_items"
          }
        ]
      }
    ],
    "dataSettings": {},
    "editor": {
      "heightMultiplier": 2
    }
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


# Delete Template

Deletes the template from workspace

```ts
async deleteTemplate(
  templateId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TheRequestWasSuccessfullyExecuted>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `number` | Template, Required | (Required) Template unique identifier |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TheRequestWasSuccessfullyExecuted`](/doc/models/the-request-was-successfully-executed.md)

## Example Usage

```ts
const templateId = 19375;
try {
  const { result, ...httpResponse } = await templateIdController.deleteTemplate(templateId);
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


# Copy Template

Creates a copy of a template to the workspace specified in authentication parameters.

```ts
async copyTemplate(
  name: string,
  templateId: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TemplateConfigurationAsJSONObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Query, Required | Name for the copied template. If name is not specified then the original name is used. |
| `templateId` | `number` | Template, Required | (Required) Template unique identifier |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TemplateConfigurationAsJSONObject`](/doc/models/template-configuration-as-json-object.md)

## Example Usage

```ts
const name = 'My copied template';
const templateId = 19375;
try {
  const { result, ...httpResponse } = await templateIdController.copyTemplate(name, templateId);
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
    "id": 24382,
    "name": "Invoice template",
    "tags": [
      "invoice",
      "orders"
    ],
    "isDraft": true,
    "layout": {
      "format": "A4",
      "width": 21,
      "height": 29.7,
      "unit": "cm",
      "orientation": "portrait",
      "rotation": 0,
      "margins": {
        "top": 0.5,
        "right": 0.5,
        "bottom": 0.5,
        "left": 0.5
      },
      "repeatLayout": {
        "format": "A4",
        "width": 21,
        "height": 29.7
      },
      "emptyLabels": 0
    },
    "pages": [
      {
        "width": 21,
        "height": 29.7,
        "margins": {
          "right": 0.5,
          "bottom": 0.5
        },
        "components": [
          {
            "cls": "labelComponent",
            "id": "component-12313",
            "width": 3.5,
            "height": 1,
            "top": 4.2,
            "left": 2.5,
            "zindex": 102,
            "value": "${price}",
            "dataIndex": "line_items"
          },
          {
            "cls": "labelComponent",
            "id": "component-12313",
            "width": 3.5,
            "height": 1,
            "top": 4.2,
            "left": 2.5,
            "zindex": 102,
            "value": "${price}",
            "dataIndex": "line_items"
          }
        ]
      },
      {
        "width": 21,
        "height": 29.7,
        "margins": {
          "right": 0.5,
          "bottom": 0.5
        },
        "components": [
          {
            "cls": "labelComponent",
            "id": "component-12313",
            "width": 3.5,
            "height": 1,
            "top": 4.2,
            "left": 2.5,
            "zindex": 102,
            "value": "${price}",
            "dataIndex": "line_items"
          },
          {
            "cls": "labelComponent",
            "id": "component-12313",
            "width": 3.5,
            "height": 1,
            "top": 4.2,
            "left": 2.5,
            "zindex": 102,
            "value": "${price}",
            "dataIndex": "line_items"
          }
        ]
      }
    ],
    "dataSettings": {},
    "editor": {
      "heightMultiplier": 2
    }
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


# Open Editor

Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application.

```ts
async openEditor(
  language: string,
  templateId: number,
  contentType: string,
  body: OpenEditorRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReturnsAnURLWhichYouCanUseToRedirectYourUserToTheEditorOrUseAsIframeSource>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `language` | `string` | Query, Required | Specify the editor UI language. Defaults to organization editor language. |
| `templateId` | `number` | Template, Required | (Required) Template unique identifier |
| `contentType` | `string` | Header, Required | - |
| `body` | [`OpenEditorRequest`](/doc/models/open-editor-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ReturnsAnURLWhichYouCanUseToRedirectYourUserToTheEditorOrUseAsIframeSource`](/doc/models/returns-an-url-which-you-can-use-to-redirect-your-user-to-the-editor-or-use-as-iframe-source.md)

## Example Usage

```ts
const language = 'en';
const templateId = 19375;
const contentType = 'application/json';
const body: OpenEditorRequest = {
  id: 12312,
  name: 'Sample Data',
};

try {
  const { result, ...httpResponse } = await templateIdController.openEditor(language, templateId, contentType, body);
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
  "response": "https://us1.pdfgeneratorapi.com/editor/open/2ff98760d39456c4b2cf974fef005ecf"
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


# Generate Document

Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

```ts
async generateDocument(
  name: string,
  format: string,
  output: string,
  templateId: number,
  contentType: string,
  body: GenerateDocumentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DocumentData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Query, Required | Document name, returned in the meta data. |
| `format` | `string` | Query, Required | Document format. The zip option will return a ZIP file with PDF files. |
| `output` | `string` | Query, Required | Response format. With the url option, the document is stored for 30 days and automatically deleted. |
| `templateId` | `number` | Template, Required | (Required) Template unique identifier |
| `contentType` | `string` | Header, Required | - |
| `body` | [`GenerateDocumentRequest`](/doc/models/generate-document-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DocumentData`](/doc/models/document-data.md)

## Example Usage

```ts
const name = 'My document';
const format = 'pdf';
const output = 'base64';
const templateId = 19375;
const contentType = 'application/json';
const body: GenerateDocumentRequest = {
  id: 12312,
  name: 'Sample Data',
};

try {
  const { result, ...httpResponse } = await templateIdController.generateDocument(name, format, output, templateId, contentType, body);
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
  "response": "JVBERi0xLjcKJeLjz9MKNyAwIG9iago8PCAvVHlwZSA...",
  "meta": {
    "name": "a2bd25b8921f3dc7a440fd7f427f90a4.pdf",
    "display_name": "a2bd25b8921f3dc7a440fd7f427f90a4",
    "encoding": "base64",
    "content-type": "application/pdf"
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


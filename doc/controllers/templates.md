# Templates

```ts
const templatesController = new TemplatesController(client);
```

## Class Name

`TemplatesController`

## Methods

* [Get Templates](/doc/controllers/templates.md#get-templates)
* [Create Template](/doc/controllers/templates.md#create-template)
* [Generate Document Multiple Templates](/doc/controllers/templates.md#generate-document-multiple-templates)


# Get Templates

Returns a list of templates available for the authenticated workspace

```ts
async getTemplates(
  requestOptions?: RequestOptions
): Promise<ApiResponse<AnArrayOfTemplateObjects>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AnArrayOfTemplateObjects`](/doc/models/an-array-of-template-objects.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await templatesController.getTemplates();
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
  "response": [
    {
      "id": 24382,
      "name": "Invoice template",
      "owner": true,
      "modified": "2017-10-21 11:49:28",
      "tags": [
        "invoice",
        "orders"
      ]
    },
    {
      "id": 24382,
      "name": "Invoice template",
      "owner": true,
      "modified": "2017-10-21 11:49:28",
      "tags": [
        "invoice",
        "orders"
      ]
    }
  ]
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


# Create Template

Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.

```ts
async createTemplate(
  contentType: string,
  body: CreateTemplateRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TemplateConfigurationAsJSONObject>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | `string` | Header, Required | - |
| `body` | [`CreateTemplateRequest`](/doc/models/create-template-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TemplateConfigurationAsJSONObject`](/doc/models/template-configuration-as-json-object.md)

## Example Usage

```ts
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

const body: CreateTemplateRequest = {
  name: 'Invoice template',
  tags: bodyTags,
  isDraft: true,
  layout: bodyLayout,
  pages: bodyPages,
};

try {
  const { result, ...httpResponse } = await templatesController.createTemplate(contentType, body);
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


# Generate Document Multiple Templates

Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.

```ts
async generateDocumentMultipleTemplates(
  name: string,
  format: string,
  output: string,
  contentType: string,
  body: GenerateDocumentMultipleTemplatesRequest[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<DocumentData>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Query, Required | Document name, returned in the meta data. |
| `format` | `string` | Query, Required | Document format. The zip option will return a ZIP file with PDF files. |
| `output` | `string` | Query, Required | Response format. With the url option, the document is stored for 30 days and automatically deleted. |
| `contentType` | `string` | Header, Required | - |
| `body` | [`GenerateDocumentMultipleTemplatesRequest[]`](/doc/models/generate-document-multiple-templates-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`DocumentData`](/doc/models/document-data.md)

## Example Usage

```ts
const name = 'My document';
const format = 'pdf';
const output = 'base64';
const contentType = 'application/json';
const body: GenerateDocumentMultipleTemplatesRequest[] = [];

const body0Data: Data = {};
body0Data.key = 'value';

const body0: GenerateDocumentMultipleTemplatesRequest = {
  template: 52272,
  data: body0Data,
};

body[0] = body0;

const body1Data: Data = {};
body1Data.key2 = 'value2';

const body1: GenerateDocumentMultipleTemplatesRequest = {
  template: 52273,
  data: body1Data,
};

body[1] = body1;

try {
  const { result, ...httpResponse } = await templatesController.generateDocumentMultipleTemplates(name, format, output, contentType, body);
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


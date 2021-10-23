
# Template Configuration as JSON Object

## Structure

`TemplateConfigurationAsJSONObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response`](/doc/models/response.md) | Required | - |

## Example (as JSON)

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


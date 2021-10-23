
# Page

## Structure

`Page`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `width` | `number` | Required | - |
| `height` | `number` | Required | - |
| `margins` | [`Margins1`](/doc/models/margins-1.md) | Required | - |
| `components` | [`Component[]`](/doc/models/component.md) | Required | - |

## Example (as JSON)

```json
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
```


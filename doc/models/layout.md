
# Layout

## Structure

`Layout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `format` | `string` | Required | - |
| `width` | `number` | Required | - |
| `height` | `number` | Required | - |
| `unit` | `string` | Required | - |
| `orientation` | `string` | Required | - |
| `rotation` | `number` | Required | - |
| `margins` | [`Margins`](/doc/models/margins.md) | Required | - |
| `repeatLayout` | [`RepeatLayout`](/doc/models/repeat-layout.md) | Required | - |
| `emptyLabels` | `number` | Required | - |

## Example (as JSON)

```json
{
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
}
```


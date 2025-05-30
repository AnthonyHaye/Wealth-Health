# SelectInput

## Description
Custom React select input, with optional search via datalist if `searchable` is true.

## Props

| Prop       | Type    | Required | Description                         |
|------------|---------|----------|-------------------------------------|
| id         | string  | ✅       | Unique ID for the input             |
| label      | string  | ✅       | Label text for the input            |
| value      | string  | ✅       | Current value of the field          |
| onChange   | func    | ✅       | Handler function for value changes  |
| options    | string[]| ✅       | List of selectable options          |
| searchable | boolean | ❌       | If true, input uses a `datalist`    |

## Example

```jsx
<SelectInput
  id="state"
  label="State"
  value={state}
  onChange={handleChange}
  options={US_STATES}
  searchable={true}
/>

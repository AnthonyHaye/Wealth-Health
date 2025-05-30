# Modal Component

## Description
A reusable modal component for displaying simple messages or content in a popup overlay.

## Props

| Prop     | Type     | Required | Description                          |
|----------|----------|----------|--------------------------------------|
| title    | string   | ❌       | The title displayed at the top       |
| message  | string   | ❌       | A message below the title            |
| onClose  | function | ✅       | Function to call when closing modal  |
| children | node     | ❌       | Optional JSX elements for content    |

## Usage

```jsx
<Modal title="Success" onClose={handleClose}>
  <p>User has been created.</p>
</Modal>

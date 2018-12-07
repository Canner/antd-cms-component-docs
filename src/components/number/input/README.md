## Usage

```jsx
<number keyName="number" ui="input" />
```

<!-- STORY -->

## Value type

```js
number
```

## uiParams props (optional)

<table>
  <thead>
    <tr>
      <th>name</th>
      <th>type</th>
      <th>default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>min</td>
      <td>number</td>
      <td>-</td>
      <td>Minimum value</td>
    </tr>
    <tr>
      <td>max</td>
      <td>number</td>
      <td>-</td>
      <td>Maximum value</td>
    </tr>
    <tr>
      <td>step</td>
      <td>number</td>
      <td>1</td>
      <td>The number to which the current value is increased or decreased. It can be an integer or decimal.</td>
    </tr>
    <tr>
      <td>precision</td>
      <td>number</td>
      <td>0</td>
      <td>precision of input value</td>
    </tr>
    <tr>
      <td>unit</td>
      <td>string</td>
      <td>-</td>
      <td>Unit of the input value</td>
    </tr>
    <tr>
      <td>formatter</td>
      <td>function(value: number | string): string</td>
      <td>-</td>
      <td>Specifies the format of the value presented.</td>
    </tr>
    <tr>
      <td>parser</td>
      <td>function(string): number</td>
      <td>-</td>
      <td>Specifies the value extracted from formatter</td>
    </tr>
  </tbody>
</table>
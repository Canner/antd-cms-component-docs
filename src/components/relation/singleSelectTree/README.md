## Usage

```jsx
<relation
  keyName="card"
  uiParams={uiParams}
  ui="singleSelectTree"
/>
```

<!-- STORY -->

## Value type

```js
Object
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
      <td>textCol</td>
      <td><code>string | Function</code></td>
      <td>-</td>
      <td>The keyName of the text field.</td>
    </tr>
    <tr>
      <td>relationField</td>
      <td><code>string</code></td>
      <td>-</td>
      <td><b>Required.</b>The relation field which point to self.</td>
    </tr>
  </tbody>
</table>
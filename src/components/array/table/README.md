## Usage

```jsx
<array
  keyName="table"
  uiParams={{
    columns: [{
      title: "title",
      key: "title",
      dataIndex: "title"
    }]
  }}
  ui="table"/>
```

<!-- STORY -->

## Value type

```js
Array<{
  [string]: any
}>
```

## uiParams props

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
      <td>columns</td>
      <td><code>Array<{
        title: string,
        key: string,
        dataIndex: string,
        renderTemplate: string
      }></code></td>
      <td></td>
      <td>Columns of table</td>
    </tr>
    <tr>
      <td>disableDelete</td>
      <td>boolean</td>
      <td></td>
      <td>Whether show delete button or not</td>
    </tr>
    <tr>
      <td>updateKeys</td>
      <td><code>Array&lt;string&gt;</code></td>
      <td></td>
      <td>Keys that should show up in update's popup window</td>
    </tr>
    <tr>
      <td>createKeys</td>
      <td><code>Array&lt;string&gt;</code></td>
      <td></td>
      <td>Keys that should show up in create's popup window</td>
    </tr>
  </tbody>
</table>
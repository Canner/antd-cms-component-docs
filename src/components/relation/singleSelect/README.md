## Usage

```jsx
<relation
  keyName="lovedPosts"
  uiParams={uiParams}
  ui="singleSelect"
  relation={{
    to: 'posts', // should be a keyName of first level
    type: 'toOne'
  }}
/>
```

<!-- STORY -->

## Value type

```js
// the post object
{id: string, title: string}
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
      <td>Used to select the value to display on tag.</td>
    </tr>
    <tr>
      <td>columns</td>
      <td><pre><code>Array&lt;{
  title: string,
  key: string,
  dataIndex: string,
  render: Function
}></code></pre></td>
      <td>-</td>
      <td>The columns should be displayed on table</td>
    </tr>
  </tbody>
</table>
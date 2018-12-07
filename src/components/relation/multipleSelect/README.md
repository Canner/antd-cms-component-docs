## Usage

```jsx
<relation
  keyName="lovedPosts"
  uiParams={uiParams}
  ui="multipleSelect"
  relation={{
    to: 'posts', // should be a keyName of first level
    type: 'toMany'
  }}
/>
```

<!-- STORY -->

## Value type

```js
// the array of post object
Array<{id: string, title: string, ...}>
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
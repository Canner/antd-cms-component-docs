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
      <td><pre><code>Array<{
        title: string,
        key: string,
        dataIndex: string,
        renderTemplate: string
      }></code></pre></td>
      <td></td>
      <td>Columns of table</td>
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
    <tr>
      <td>size</td>
      <td><code>'default' | 'midlle' | 'size'</code></td>
      <td>'default'</td>
      <td></td>
    </tr>
    <tr>
      <td>bordered</td>
      <td><code>boolean</code></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>showHeader</td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>Show the header of table or not.</td>
    </tr>
    <tr>
      <td>createButtonPosition</td>
      <td><code>'right' | 'left'</code></td>
      <td><code>'right'</code></td>
      <td>The position of create button.</td>
    </tr>
  </tbody>
</table>
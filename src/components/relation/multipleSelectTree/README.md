## Usage

This component only works in self-relation field, for examples, `category` can be one of the `parentCategories` of the another `category`.

```jsx
<array
  keyName="categories"
>
  <relation
    keyName="parentCategories"
    uiParams={uiParams}
    ui="multipleSelectTree"
    relation={{
      to: 'categories', // relation to self
      type: 'toMany'
    }}
  />
</array>
```

<!-- STORY -->

## Value type

```js
// the array of category Object
Array<{id: string, name: string, ...}>
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
    <tr>
      <td>disabled</td>
      <td><pre><code>(
  data: TreeNodeData,
  key: string
) => boolean</code></pre></td>
      <td>-</td>
      <td>You can disable any node by this property.</td>
    </tr>
  </tbody>
</table>
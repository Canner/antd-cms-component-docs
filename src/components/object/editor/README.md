## Usage

```jsx
<object
  keyName="editor"
  ui="editor"
/>
```

<!-- STORY -->

## Value type

```js
{
  slate: JSONString,
  html: HtmlString
}
```

## Sample data

```js
{
  html: "<p>fdsfds</p>",
  state: "{\"object\":\"value\",\"document\":{\"object\":\"document\",\"data\":{},\"nodes\":[{\"object\":\"block\",\"type\":\"paragraph\",\"isVoid\":false,\"data\":{},\"nodes\":[{\"object\":\"text\",\"leaves\":[{\"object\":\"leaf\",\"text\":\"fdsfds\",\"marks\":[]}]}]}]}}"
}
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
      <td>minHeight</td>
      <td><code>string</code></td>
      <td>'400px'</td>
      <td>set the initial height</td>
    </tr>
  </tbody>
</table>

## Usage

```jsx
<string
  keyName="select"
  ui="radio"
  uiParams={{
    options: [{
      text: 'option 1',
      value: "1"
    }, {
      text: 'option 2',
      value: "2"
    }],
    defaultSelected: 1
  }}/>
```

<!-- STORY -->

## Value type

```js
string
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
      <td>options</td>
      <td><code>Array<{text: string, value: string}></code></td>
      <td></td>
      <td>Option titles and keys</td>
    </tr>
  </tbody>
</table>
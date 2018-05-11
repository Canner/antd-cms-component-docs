## Usage

```jsx
<object
  keyName="options"
  uiParams={{
    options: [{
      title: 'Option1',
      key: 'option1'
    }, {
      title: 'Option2',
      key: 'option2'
    }]
  }}
  ui="options"/>
```

<!-- STORY -->

## Value type

```js
{
  selectedKey: string,
  [string]: any
}
```

## Sample data

```js
{
  selectedKey: "option1",
  option1: {
    title: "this is title 1"
  },
  option2: {
    content: "this is content 2"
  }
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
      <td>options</td>
      <td><code>Array<{title: string, key: string}></code></td>
      <td></td>
      <td>Option titles and keys</td>
    </tr>
  </tbody>
</table>

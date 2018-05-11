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
    }],
    optionKey: 'selectedKey'
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

## Sample

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

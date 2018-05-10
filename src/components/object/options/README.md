## Options

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
  items={{
    option1: {
      type: "string",
      keyName: "option1"
    },
    option2: {
      keyName: "option2",
      type: "string",
      ui: "editor"
    }
  }}
  ui="options"/>
```

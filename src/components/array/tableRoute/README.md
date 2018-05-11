## Array table route

```jsx
<array
  keyName="table"
  value={immutable.fromJS([{
    "title": "title 1",
    "content": "content 1"
  }, {
    "title": "title 2",
    "content": "content 2"
  }])}
  uiParams={{
    columns: [{
      title: "title",
      key: "title",
      dataIndex: "title"
    }]
  }}
  ui="tableRoute"/>
```

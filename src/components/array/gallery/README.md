
## Usage

```jsx
<array keyName="gallery" ui="gallery"/>
```

<!-- STORY -->

## Value type

```js
Array<{
  image: {
    url: string,
    size: number,
    contentType: string,
    name: string
  }
}>
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
      <td>imageKey</td>
      <td>string</td>
      <td>image</td>
      <td>The key that store image url</td>
    </tr>
    <tr>
      <td>disableDrag</td>
      <td>boolean</td>
      <td>false</td>
      <td>Wether enable drag and drop feature</td>
    </tr>
  </tbody>
</table>

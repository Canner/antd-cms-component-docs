## Usage

```jsx
<image keyName="photo" ui="image"/>
```

<!-- STORY -->

## Value type

```js
{
  contentType: string,
  name: string
  size: number,
  url: string,
}
```

## Sample

```js
{
  contentType: "image/jpg",
  name: "mythumb.jpg",
  size: 1233,
  url: "https://image.com/mythumb.jpg"
}
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
      <td>service</td>
      <td><code>canner</code> | <code>imgur</code> | <code>firebase</code></td>
      <td></td>
      <td>image service provider</td>
    </tr>
    <tr>
      <td>dir</td>
      <td>string</td>
      <td></td>
      <td>directory path</td>
    </tr>
    <tr>
      <td>filename</td>
      <td>string</td>
      <td></td>
      <td>filename of the image</td>
    </tr>
  </tbody>
</table>
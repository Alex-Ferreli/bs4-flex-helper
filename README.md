# bs4-flex-helper

`bs4-flex-helper` is a helper function the generate corresponding BS4 flex classes, based on single value or array of values for responsive breakpoints.

## Install

```bash
npm i bs4-flex-helper
```

or

```bash
yarn add bs4-flex-helper
```

## Usage

```javascript
  import bs4FlexHelper from 'bs4-flex-helper';

  const divClasses = bs4FlexHelper({ dir: 'row' });

  console.log(divClasses); // d-flex flex-row
```

Main function accept 2 arguments:
- object contains properties to set
- boolean to insert base flex class before (d-flex)

|property|type|values|default|description|
|---|---|---|---|---|
|dir|string or array|'sm' or ['xs', 'sm', ...]||flex-direction property|
|jc|string or array|'sm' or ['xs', 'sm', ...]||justify-content property|
|ai|string or array|'sm' or ['xs', 'sm', ...]||align-items property|
|ac|string or array|'sm' or ['xs', 'sm', ...]||align-content property|
|wrap|string or array|'sm' or ['xs', 'sm', ...]||wrap property|
|inline|boolean|true or false|false|use inline-flex or flex|

### Example with React
```jsx
import React from 'react';
import bs4FlexHelper from 'bs4-flex-helper';

const bs4Class = bs4FlexHelper({ dir: 'row' });

export default function Panel() {
  return <div className={bs4Class}>bs4-flex-helper</div>;
}
```

->

```html
<div class="d-flex flex-row">bs4-flex-helper</div>
```

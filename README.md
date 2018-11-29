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

Object properties:
|property|default|values|description|
|---|---|---|---|
|dir|''|'sm' or ['xs', 'sm', ...]|generate classes for flex-direction property|
|jc|''|'sm' or ['xs', 'sm', ...]|generate classes for justify-content property|
|ai|''|'sm' or ['xs', 'sm', ...]|generate classes for align-items property|

### With React
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

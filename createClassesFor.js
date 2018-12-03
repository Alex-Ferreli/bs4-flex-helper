import { isArray } from 'lodash';

const bp = ['', '-sm', '-md', '-lg', '-xl'];

export default (property, values) => {
  if (!values) return '';

  if (!isArray(values)) return `${property}-${values}`;

  return values.reduce((acc, value, i) => {
    if (!value) return acc;

    return [...acc, `${property}${bp[i]}-${value}`];
  }, []).join(' ');
};

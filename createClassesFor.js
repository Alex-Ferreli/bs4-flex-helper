import arrayify from 'array-back';

const bp = ['', '-sm', '-md', '-lg', '-xl'];

export default (property, values) => {
  const arrayValues = arrayify(values);

  if (!arrayValues.length) return '';

  return arrayValues.reduce((acc, value, i) => {
    if (!value) return acc;

    return [...acc, `${property}${bp[i]}-${value}`];
  }, []).join(' ');
};

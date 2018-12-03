import createClassesFor from './createClassesFor';

export default ({
  dir,
  jc,
  ai,
  ac,
  wrap,
  inline = false,
} = {}, base = true) => [
  base && (inline ? 'd-inline-flex' : 'd-flex'),
  createClassesFor('flex', dir),
  createClassesFor('justify-content', jc),
  createClassesFor('align-items', ai),
  createClassesFor('align-content', ac),
  createClassesFor('flex', wrap),
].filter(Boolean).join(' ');

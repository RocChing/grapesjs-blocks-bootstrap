export default function (editor, opt = {}) {
  let bm = editor.BlockManager;

  const step = 0.2;
  const minDim = 1;
  const currentUnit = 1;
  const resizerBtm = { tl: 0, tc: 0, tr: 0, cl: 0, cr: 0, bl: 0, br: 0, minDim };
  const resizerRight = { ...resizerBtm, cr: 1, bc: 0, currentUnit, minDim, step };

  const rowAttr = {
    class: 'container',
    'data-gjs-droppable': `.col-md-1`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-name': 'container',
    'style': 'min-height:100px;'
  };

  const colAttr = {
    class: '.col-md-1',
    'data-gjs-draggable': '.col-md-1',
    'data-gjs-resizable': resizerRight,
    'data-gjs-name': '.col-md-1',
    'style': 'min-height:100px;'
  };

  const attrsToString = attrs => {
    const result = [];

    for (let key in attrs) {
      let value = attrs[key];
      const toParse = value instanceof Array || value instanceof Object;
      value = toParse ? JSON.stringify(value) : value;
      result.push(`${key}=${toParse ? `'${value}'` : `"${value}"`}`);
    }

    return result.length ? ` ${result.join(' ')}` : '';
  }

  const attrsRow = attrsToString(rowAttr);
  const attrsCell = attrsToString(colAttr);

  //布局
  bm.add('container', {
    label: '容器',
    category: 'container',
    //attributes: { class: 'gjs-fonts gjs-f-b1' },
    content: `<div ${attrsRow}>这是容器</div>`
  });

  bm.add('container-fluid', {
    label: '容器-fluid',
    category: 'container',
    //attributes: { class: 'gjs-fonts gjs-f-b1' },
    content: '<div class="container-fluid" style="min-height:100px;">这是容器</div>'
  });

  bm.add('column1', {
    label: '1列',
    category: 'container',
    //attributes: { class: 'gjs-fonts gjs-f-b1' },
    content: `<div ${attrsCell}>这是列</div>`
  });
}
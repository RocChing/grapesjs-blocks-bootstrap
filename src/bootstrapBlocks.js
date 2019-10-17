export default function (editor, opt = {}) {
  let bm = editor.BlockManager;

  const step = 0.2;
  const minDim = 1;
  const currentUnit = 1;
  const resizerBtm = { tl: 0, tc: 0, tr: 0, cl: 0, cr: 0, bl: 0, br: 0, minDim };
  const resizerRight = { ...resizerBtm, cr: 1, bc: 0, currentUnit, minDim, step };

  const layout = '布局';
  const getContainerName = fluid => { return fluid ? 'container-fulid' : 'container' };
  const containerName = getContainerName(false);
  const containerFluidName = getContainerName(true);

  const containerAttr = {
    class: containerName,
    'data-gjs-droppable': `.row`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-name': containerName,
    'style': 'min-height:100px;'
  };

  const containerFluidAttr = {
    class: containerFluidName,
    'data-gjs-droppable': `.row`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-name': containerFluidName,
    'style': 'min-height:100px;'
  };

  const rowAttr = {
    class: 'row',
    'data-gjs-droppable': `.col-md-1`,
    'data-gjs-resizable': resizerBtm,
    'data-gjs-name': 'row',
    'style': 'min-height:100px;'
  };

  const colAttr = {
    class: 'col-md-1',
    'data-gjs-draggable': '.row',
    'data-gjs-resizable': resizerRight,
    'data-gjs-name': 'col-md-1',
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
  bm.add(containerName, {
    label: '容器',
    category: layout,
    //attributes: { class: 'gjs-fonts gjs-f-b1' },
    content: `<div ${attrsToString(containerAttr)}>这是容器</div>`
  });

  bm.add(containerFluidName, {
    label: '容器-fluid',
    category: layout,
    //attributes: { class: 'gjs-fonts gjs-f-b1' },
    content: `<div ${attrsToString(containerFluidAttr)}>这是容器-fluid</div>`
  });

  bm.add('row-1', {
    label: '行',
    category: layout,
    //attributes: { class: 'gjs-fonts gjs-f-b1' },
    content: `<div ${attrsRow}>这是行</div>`
  });

  bm.add('column-1', {
    label: '1列',
    category: layout,
    //attributes: { class: 'gjs-fonts gjs-f-b1' },
    content: `<div ${attrsCell}>这是列</div>`
  });
}
import grapesjs from 'grapesjs';

export default grapesjs.plugins.add('gjs-blocks-bootstrap', (editor, opts = {}) => {
  const config = {
    blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video', 'map'],
    //blocks: ['container'],
    flexGrid: 0,
    stylePrefix: 'gjs-',
    addBasicStyle: true,
    category: 'Basic',
    labelColumn1: '1 Column',
    labelColumn2: '2 Columns',
    labelColumn3: '3 Columns',
    labelColumn37: '2 Columns 3/7',
    labelText: 'Text',
    labelLink: 'Link',
    labelImage: 'Image',
    labelVideo: 'Video',
    labelMap: 'Map',
    ...opts
  };

  // Add blocks
  const loadBlocks = require('./bootstrapBlocks');
  loadBlocks.default(editor, config);

  const loadBlocks2 = require('./blocks');
  loadBlocks2.default(editor,config);
});

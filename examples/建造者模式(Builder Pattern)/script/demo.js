const Director = require('./Dircetor');
const Builder = require('./Builder');

const mBuilder= new Builder();
const mDirector=new Director(mBuilder);
mDirector.create('cpuxxx','mainboardxxx','ramxxx').show();


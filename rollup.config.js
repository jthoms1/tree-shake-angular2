//rollup hack
import * as path from 'path';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve'

class RollupNG2 {
  constructor(options){
    this.options = options;
  }
  resolveId(id, from){
    if(id.startsWith('rxjs/')){
      return `${__dirname}/node_modules/rxjs-es/${id.split('rxjs/').pop()}.js`;
    }

    if(id.startsWith('@angular/core')){
      if(id === '@angular/core'){
        return `${__dirname}/node_modules/@angular/core/esm/index.js`;
      }
      return `${__dirname}/node_modules/@angular/core/esm/${id.split('@angular/core').pop()}.js`;
    }
    if(id.startsWith('@angular/common')){
      if(id === '@angular/common'){
        return `${__dirname}/node_modules/@angular/common/esm/index.js`;
      }
      return `${__dirname}/node_modules/@angular/common/esm/${id.split('@angular/common').pop()}.js`;
    }
  }
}

const rollupNG2 = (config) => new RollupNG2(config);

export default {
  entry: 'src/main.js',
  sourceMap: true,
  plugins: [
    rollupNG2(),
    nodeResolve({
      jsnext: true, main: true
    }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/rxjs-es/node_modules/symbol-observable/**',

      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      extensions: ['.js'],

      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: false,  // Default: false

      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false,  // Default: true
    })
  ]
}

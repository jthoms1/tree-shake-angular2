//rollup hack
import * as path from 'path';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import gzipSize from 'gzip-size';
import fs from 'fs';
import { minify } from 'uglify-js';
import babel from 'rollup-plugin-babel';

class RollupNG2 {
  constructor(options) {
    this.options = options;
  }
  resolveId(id, from) {
    if (id.startsWith('rxjs/')) {
      return `${__dirname}/node_modules/rxjs-es/${id.split('rxjs/').pop()}.js`;
    }

    if (id.startsWith('@angular/core')) {
      if (id === '@angular/core') {
        return `${__dirname}/node_modules/@angular/core/esm/index.js`;
      }
      return `${__dirname}/node_modules/@angular/core/esm/${id.split('@angular/core').pop()}.js`;
    }
    if (id.startsWith('@angular/common')) {
      if (id === '@angular/common') {
        return `${__dirname}/node_modules/@angular/common/esm/index.js`;
      }
      return `${__dirname}/node_modules/@angular/common/esm/${id.split('@angular/common').pop()}.js`;
    }
    /*
    if (id.startsWith('ionic-angular')) {
      if (id === 'ionic-angular') {
        return `${__dirname}/node_modules/ionic-angular/esm/index.js`;
      }
      return `${__dirname}/node_modules/ionic-angular/esm/${id.split('ionic-angular').pop()}.js`;
      }
      */
  }
  transform(code, id) {
    if (code.indexOf('require(') !== -1) {
      console.log(`OOOOOOOOOOOOOOOOOOOOOOOOOOOOOO -> ${id} `);
    }
    return {
      code: code,
      map: {
        mappings: ''
      }
    }
  }
}

var origsize = 0;
class Logging {
  transform(code, id) {
    var filesize = Buffer.byteLength(code) / 1000;
    var minText = '   ';

    if (id.indexOf('/node_modules/') !== -1 && id.indexOf('rxjs-es') === -1) {
      var es5file = id.replace(/\/esm/, '');
      var minifiedCode = minify(es5file);
      var filesize = Buffer.byteLength(minifiedCode.code) / 1000;
      minText = '(min)';
    }

    origsize += filesize;
    var padding = '         '.substring(0, 9 - String(filesize).indexOf('.'));
    console.log(`${padding}${filesize.toFixed(2)}, ${minText}, ${id.replace(__dirname,'')}`);
    return {
      code: code,
      map: {
        mappings: ''
      }
    }
  }
}

const rollupNG2 = (config) => new RollupNG2(config);
const logging = (config) => new Logging(config);

export default {
  entry: 'src/main.ts',
  sourceMap: true,
  plugins: [
    typescript({
      typescript: require('typescript')
    }),
    rollupNG2(),
    nodeResolve({
      jsnext: true, main: true
    }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: [
        'node_modules/symbol-observable/**',
        'node_modules/ionic-angular/components/slides/swiper-widget.js'
      ],

      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      extensions: ['.js'],

      // if true then uses of `global` won't be dealt with by this plugin
      ignoreGlobal: false,  // Default: false

      // if false then skip sourceMap generation for CommonJS modules
      sourceMap: false,  // Default: true
    }),
    babel({
      exclude: 'node_modules/ionic-angular/**'
    })
    //    logging()
  ]
}

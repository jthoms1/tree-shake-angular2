find ./src -name "*.ngfactory*" | awk '{print "rm " $1}' | sh &&
  ./node_modules/.bin/ngc -p ngcTsconfig.json &&
  ./node_modules/.bin/tsc -p tsconfig.json &&
  ./node_modules/.bin/rollup -f iife -c -o dist/js/bundle.es2015.js &&
  ./node_modules/.bin/babel dist/js/bundle.es2015.js > dist/js/bundle.es5.js &&
  ./node_modules/.bin/uglifyjs dist/js/bundle.es5.js --screw-ie8 --compress --mangle --output dist/js/bundle.min.js &&
  gzip -f dist/js/bundle.min.js

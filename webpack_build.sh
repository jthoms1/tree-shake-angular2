find ./src -name "*.ngfactory*" | awk '{print "rm " $1}' | sh &&
  ./node_modules/.bin/ngc -p ngcTsconfig.json &&
  ./node_modules/.bin/tsc -p tsconfig.json &&
  ./node_modules/.bin/webpack -p
  gzip -f dist/js/main.bundle.js dist/js/vendor.bundle.js dist/js/polyfills.bundle.js

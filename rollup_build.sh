# Compile the components down to templates
./node_modules/.bin/ngc -p ngcTsconfig.json && \
  # Run rollup to typescript -> es5 -> bundle
  ./node_modules/.bin/rollup -f iife -c -o dist/js/bundle.es5.js && \
    ls -oh dist/js/bundle.es5.js && \
  # minify the output
  ./node_modules/.bin/uglifyjs dist/js/bundle.es5.js --screw-ie8 --compress --mangle --output dist/js/bundle.min.js && \
    ls -oh dist/js/bundle.min.js && \
  # compresss the output
  gzip -f dist/js/bundle.min.js && \
    ls -oh dist/js/bundle.min.js.gz && \
  # Remove all left over files
  find ./src -name "*.ngfactory*" | awk '{print "rm " $1}' | sh && \
  find ./src -name "*metadata.json" | awk '{print "rm " $1}' | sh

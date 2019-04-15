var compressor = require('node-minify');
var args = process.argv.splice(2);
var etcRoot = '../aem/sonystyle/ui.apps/src/main/content/jcr_root/etc/designs/sonystyle/';

console.log(etcRoot + 'clientlib-' + args + "/" + args + ".js");
// Using Google Closure Compiler
compressor.minify({
    compressor: 'gcc',
    input: etcRoot + 'clientlib-' + args + "/" + args + ".js",
    output: etcRoot + 'clientlib-' + args + "/" + args + "-min.js",
    callback: function (err, min) {}
});

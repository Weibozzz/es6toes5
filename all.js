let fs = require('fs');
let join = require('path').join;
let paths = require('path');
var compressor = require('node-minify');
var etcRoot = '../aem/sonystyle/ui.apps/src/main/content/jcr_root/etc/designs/sonystyle/';
var files = [
	"clientlib-api/",
	"clientlib-category/",	
	"clientlib-compare/",	
	"clientlib-detail/",	
	"clientlib-finish/",	
	"clientlib-member/",		
	"clientlib-minicart/",	
	"clientlib-mixin/",	
	"clientlib-price/",	
	"clientlib-shop-car/",	
	"clientlib-write-order/",
	"clientlib-axios/",
	"clientlib-multiprice/",
	"clientlib-search/",
	"clientlib-personalization/",
	"clientlib-search-suggestion/"
]
/**
 *
 * @param startPath  起始目录文件夹路径
 * @returns {Array}
 */
function findSync(startPath) {
    let result = [];

    //finder(startPath);

	startPath.forEach((val,index) => {
		var fpath = etcRoot + val + val.replace('clientlib-','').replace('/','') + ".js";
		let stats = fs.statSync(fpath);
		console.log(fpath);
		if (stats.isFile()) {
			// console.log('fPath',paths.basename(fPath,'.js'));
			compressor.minify({
				compressor: 'gcc',
				input: fpath,
				output: etcRoot + val + val.replace('clientlib-','').replace('/','') + "-min.js",
				//output: './min/' + paths.basename(fPath,'.js') + '.js',
				callback: function (err, min) {
				}
			});
			// result.push(fPath)
			result.push(paths.basename(fpath,'.js'))
		}
	})
    return result;
}

let fileNames = findSync(files);
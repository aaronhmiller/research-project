/***
preamble: script to make researching company incrementally faster & easier
plus an excuse to try making a barely useful Node.js tool ;)
usage: node quicklookup.js -b <company_name>
expected behavior: launch two default browser windows, one to crunchbase & another to glassdoor

requires: node, openurl & minimist 
***/

var argv = require('minimist')(process.argv.slice(2));
var url = argv.b;
console.dir(url);
require("openurl").open("http://crunchbase.com/organization/" + url);
require("openurl").open("https://www.glassdoor.com/Search/results.htm?keyword=" + url);
//just leaving here b/c handy to mail from a server-side script!
//require("openurl").mailto(["aaronmiller@gmail.com"],
//    { subject: "Info about " + url, body: "This is an automatically sent email!" });

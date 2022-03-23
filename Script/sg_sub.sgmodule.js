#!name=eval_script.js module

[MITM]
hostname = %INSERT% api.m.jd.com,ios-*.prod.ftl.netflix.com,ios.prod.ftl.netflix.com

[Script]
nf_rating.js = type=http-request,pattern=^https?://ios(-.*)?\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
nf_rating.js = type=http-response,requires-body=1,pattern=^https?://ios(-.*)?\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
jd_price.js = type=http-response,requires-body=1,pattern=^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig),script-path=https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js
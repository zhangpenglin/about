var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var app = new CallApp({
    scheme: 'ntmy://',
    timeout: 1800,
    autoCall: true // 自动唤起
});

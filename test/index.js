"use strict";

let http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    naviVerify = require('../lib/naviVerify');

let __rootPath = path.resolve( __dirname + '/..' );

function outputFile( response, jPath ){
    let jReadFile = fs.createReadStream( __rootPath + jPath );
    jReadFile.setEncoding('UTF8');
    jReadFile.on( 'open', function(){
        jReadFile.pipe( response );
    } );
}

http.createServer(function( request, response ){
    let jURL = url.parse( request.url, true ),
        jPathName = decodeURIComponent( jURL.pathname );

    console.log( jPathName );


	
    switch( jPathName ){
        case '/':
            let jUserAgent = request.headers['user-agent'],
                jNavigatorID = naviVerify( jUserAgent );

            console.log('=======');
            console.log( jUserAgent );
            console.log( jNavigatorID );
            console.log('=======');

            response.writeHead( 200, { "Content-Type": "text/html" });
            outputFile( response, '/test/index.html' );
            break;
        default:
            if( fs.existsSync( __rootPath + jPathName ) )
                outputFile( response, jPathName );
            else
                response.end('404');
    }

}).listen(8080);

console.log( '伺服器開啟於 http://localhost:8080/' );

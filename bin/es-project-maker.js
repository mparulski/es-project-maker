#!/usr/bin/env node
'use strict';

const [executor, ignoredBin, script] = process.argv;

if(script && script !== '--help' && script !== 'help') {
    if(script === 'build-locale') {
        console.log("Start locale building project")
    }
    if(script === 'build-prod') {
        console.log("Start production building project")
    }
}

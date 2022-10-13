//Init head
const fs = require('fs');
const { resolve } = require('path');


//---------------------------------------------------------//
//Globals

//Relative directory to media to be catalogued. Default: "."
const mediaDirectory = "./";


//---------------------------------------------------------//
//Directory Actions

//Create promise of directory of items
function returnDirPromise(queriedDir) {
    return new Promise((resolve, reject) => {
        return fs.readdir(queriedDir, (err, files) => {
            if (err) { console.error(err); }
            else { resolve(files); }
        })
    })
}

//Take promise from above, check for ignored files, return collection of directory
async function returnDirCol(queriedDir, ...ignoredFileList){
    //Populate from promise
    let dirCollection = await returnDirPromise(queriedDir);
    
    //Check against ignore list, splice out if found
    dirCollection.forEach(file => {
        if(ignoredFileList.indexOf(file) != -1){
            dirCollection.splice(dirCollection.indexOf(file),1);
        }
    });

    //Return modified array
    return dirCollection;
}


//---*----------------------**-------------------------*---//
//Main process
async function main(){
    console.log(await returnDirCol(mediaDirectory,'fakeFile.ini','dir_init.js'));

}
//Start
main();
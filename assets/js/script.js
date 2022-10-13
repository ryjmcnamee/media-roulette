//Globals
var mediaList = 


function getNextMediaName(){return;}

function getRandomMediaName(){return;}

function getNewMediaSelection(){

    if(isRandom){
        getRandomMediaName();
    }
    else{
        getNextMediaName();
    }

}

function newPlayerObject(media){return;}

function newPlayerView(){

    newPlayerObject(getNewMediaSelection());

}

function newPlayerControls(){return;}

function newPlayerBox(){
    newPlayerView();
    newPlayerControls();
}
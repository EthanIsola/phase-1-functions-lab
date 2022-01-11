// Code your solution in this file!
function distanceFromHqInBlocks(start){
    if(start > 42){
        return start-42;
    }
    else{
        return 42-start;
    }
}

function distanceFromHqInFeet(start){
    if(start > 42){
        return (start - 42) * 264;
    }
    else{
        return (42 - start) * 264;
    }
}
function distanceTravelledInFeet(start,finish){
    if(start > finish){
        return (start - finish) * 264;
    }
    else{
        return (finish - start) * 264;
    }
}
function calculatesFarePrice(start,finish){
    let travelled;
    if(start > finish){
        travelled = (start - finish) * 264;
    }
    else{
        travelled = (finish - start) * 264;
    }

    if(travelled < 400){
        return 0;
    }
    if(travelled >= 400 && travelled <= 2000){
        return (travelled-400) * .02;
    }
    if(travelled > 2000 && travelled <= 2500){
        return 25;
    }
    else{
        return `cannot travel that far`;
    }
}

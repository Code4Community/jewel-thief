//3 is guard
//2 is robber
//4 is the gem
//5 is horizontal flashlight guard
//6 is vertical flashlight beam
//7 is horizontal flashlight guard
//8 is vertical flashlight guard
//9 is void

//level 1
let demo = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
    [9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
    [9,0,3,0,0,0,2,0,0,0,0,0,0,4,0,0,0,3,0,9],
    [9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
    [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

let arr1=[
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,0,4,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,9,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,9,0,0,0,9,1,1],
[1,1,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,0,2,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

//level2
let arr2=[ 
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1],
[1,1,1,1,1,9,0,0,0,0,0,0,0,0,9,1,1,1,1,1],
[1,1,1,1,1,9,0,0,0,0,0,0,0,0,9,1,1,1,1,1],
[1,1,9,9,9,9,0,0,0,0,0,0,0,0,9,9,9,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,0,2,0,0,0,0,0,3,0,0,0,0,4,0,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,9,9,9,0,0,0,0,0,0,0,0,9,9,9,9,1,1],
[1,1,1,1,1,9,0,0,0,0,0,0,0,0,9,1,1,1,1,1],
[1,1,1,1,1,9,0,0,0,0,0,0,0,0,9,1,1,1,1,1],
[1,1,1,1,1,9,9,9,9,9,9,9,9,9,9,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

let arr3 = 
[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,0,0,3,0,0,0,0,0,0,0,3,0,0,0,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,2,0,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,0,0,4,0,0,0,3,0,0,0,0,0,0,0,9,1,1],
[1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1,1],
[1,1,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]

//level4
//not completed
let arr4= 
[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[9,9,9,9,9,1,1,1,1,1,1,1,1,1,9,9,9,9,9,9],
[9,2,0,0,9,1,1,1,1,1,1,1,1,1,9,0,0,0,0,9],
[9,9,9,0,9,9,9,1,1,1,1,1,1,1,9,0,4,0,0,9],
[1,1,9,0,0,0,9,1,1,1,1,1,1,1,9,0,0,0,0,9],
[1,1,9,9,9,0,9,9,9,1,1,1,1,1,9,0,0,0,0,9],
[1,1,1,1,9,0,0,0,9,1,1,1,1,1,9,0,0,0,0,9],
[1,1,1,1,9,9,9,0,9,9,9,1,1,1,9,0,3,0,0,9],
[1,1,1,1,1,1,9,0,0,0,9,1,1,1,9,0,0,0,0,9],
[1,1,1,1,1,1,9,9,9,0,9,9,9,1,9,0,0,0,0,9],
[1,1,1,1,1,1,1,1,9,0,0,0,9,1,9,0,0,0,0,9],
[1,1,1,1,1,1,1,1,9,9,9,0,9,9,9,0,0,0,0,9],
[1,1,1,1,1,1,1,1,1,1,9,0,0,0,0,0,0,0,0,9],
[1,1,1,1,1,1,1,1,1,1,9,9,9,9,9,9,9,9,9,9],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];

let arr5= 
[[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
[9,0,0,0,0,0,9,9,9,0,0,0,0,9,9,9,9,9,9,9],
[9,0,2,0,0,0,9,9,9,0,0,8,0,9,9,9,9,9,9,9],
[9,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,9],
[9,9,9,9,0,0,0,0,0,0,0,6,0,0,0,0,8,0,0,9],
[9,9,9,9,0,0,0,0,0,0,0,6,0,0,0,0,6,0,0,9],
[9,9,9,9,0,0,0,0,0,0,0,6,0,0,0,0,6,0,0,9],
[9,9,9,9,0,0,0,3,0,0,0,6,0,0,0,0,6,0,0,9],
[9,9,9,9,0,0,0,0,0,0,0,9,0,0,0,0,6,0,0,9],
[9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,9],
[9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,9],
[9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,9,9,0,7,5,5,5,5,5,5,5,9,0,0,0,0,4,0,9],
[9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9],
[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]];


function getLevel(level){
  switch(level){
    case 0:
      return demo;
    case 1:
      return arr1;
    case 2:
      return arr2;
    case 3:
        return arr3;
    case 4:
      return arr4;
    case 5:
      return arr5;
  }
}
//Legend
const O = -1;           //NOTHING
const C = 0;     //CORRIDOR
const T = 1;         //TURN
const J = 2;    //TJUNCTION
const X = 3;   //CROSSROADS
const E = 4;         //EDGE
const A = 5;      //AIRLOCK
const D = 6;       //DBLOCK

//Map
const map_EZ1 = [
    [O,O,O,O,O,O,O,O],
    [O,O,O,O,O,O,O,O],
    [A,C,T,O,E,O,E,O],
    [O,O,J,C,J,C,J,O],
    [O,O,C,T,C,C,X,E],
    [O,O,C,C,O,O,C,O],
    [A,C,J,X,C,J,J,E],
    [O,O,O,E,O,E,O,O]
];
const map_EZ1_rotation= [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,1,2,0,2,0,2,0],
    [0,0,1,1,0,1,3,0],
    [0,0,0,1,1,1,0,3],
    [0,0,0,0,0,0,0,0],
    [0,1,0,0,1,2,0,3],
    [0,0,0,0,0,0,0,0]
];

const map_EZ2 = [
    [O,O,O,O,O,O,O],
    [O,O,O,O,E,O,O],
    [A,C,J,C,X,E,O],
    [O,O,C,O,T,T,O],
    [O,O,J,E,O,J,E],
    [O,O,C,O,O,C,O],
    [A,C,J,C,C,X,E],
    [O,O,O,O,O,E,O]
];
const map_EZ2_rotation= [
    [0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0],
    [0,1,2,1,0,3,0],
    [0,0,0,0,0,2,0],
    [0,0,1,3,0,1,3],
    [0,0,0,0,0,0,0],
    [0,1,0,1,1,0,3],
    [0,0,0,0,0,0,0]
]
const map_EZ3 = [
    [O,O,O,O,O,O],
    [O,O,E,O,E,O],
    [A,C,X,C,J,O],
    [O,O,J,C,X,E],
    [O,O,C,T,J,O],
    [O,O,J,T,C,O],
    [A,C,X,C,J,E],
    [O,O,E,O,O,O]
];
const map_EZ3_rotation= [
    [0,0,0,0,0,0],
    [0,0,2,0,2,0],
    [0,1,0,1,3,0],
    [0,0,1,1,0,3],
    [0,0,0,1,3,0],
    [0,0,1,3,0,0],
    [0,1,0,1,0,3],
    [0,0,0,0,0,0]
]
const map_EZ4 = [
    [O,O,O,O,O,O],
    [O,O,O,E,O,O],
    [A,C,J,X,C,E],
    [O,O,C,C,O,O],
    [O,O,J,J,E,O],
    [O,O,C,T,X,E],
    [A,C,X,C,J,O],
    [O,O,E,O,E,O]
];
const map_EZ4_rotation= [
    [0,0,0,0,0,0],
    [0,0,0,2,0,0],
    [0,1,2,0,1,3],
    [0,0,0,0,0,0],
    [0,0,1,3,2,0],
    [0,0,0,0,0,3],
    [0,1,0,1,3,0],
    [0,0,0,0,0,0]
];
const map_EZ5 = [
    [O,O,O,O,O,O,O],
    [O,O,E,O,O,O,O],
    [A,C,X,T,O,E,O],
    [O,O,C,T,J,X,E],
    [O,O,C,O,C,C,O],
    [O,O,C,T,J,X,E],
    [A,C,J,X,C,J,O],
    [O,O,O,E,O,E,O]
];
const map_EZ5_rotation = [
    [0,0,0,0,0,0,0],
    [0,0,2,0,0,0,0],
    [0,1,0,2,0,2,0],
    [0,0,0,0,2,0,3],
    [0,0,0,0,0,0,0],
    [0,0,0,1,0,0,3],
    [0,1,0,0,1,3,0],
    [0,0,0,0,0,0,0]
]

const EZ_maps = [
    {map:map_EZ1, rotationMap:map_EZ1_rotation, name:"EZ1"},
    {map:map_EZ2, rotationMap:map_EZ2_rotation, name:"EZ2"},
    {map:map_EZ3, rotationMap:map_EZ3_rotation, name:"EZ3"},
    {map:map_EZ4, rotationMap:map_EZ4_rotation, name:"EZ4"},
    {map:map_EZ5, rotationMap:map_EZ5_rotation, name:"EZ5"}
];

const map_HCZ1 = [
    [O,O,O,O,E,O,O,O],
    [O,E,T,T,X,T,O,O],
    [O,O,J,T,C,T,J,A],
    [O,O,C,T,J,T,C,O],
    [O,E,X,T,O,T,J,O],
    [O,O,C,O,O,O,C,O],
    [O,O,J,C,J,C,J,A],
    [O,O,E,O,E,O,O,O]
];
const map_HCZ1_rotation = [
    [0,0,0,0,2,0,0,0],
    [0,1,2,1,0,2,0,0],
    [0,0,1,3,0,0,2,2],
    [0,0,0,1,0,2,0,0],
    [0,1,0,3,0,0,3,0],
    [0,0,0,0,0,0,0,0],
    [0,0,1,1,2,1,0,2],
    [0,0,0,0,0,0,0,0]
];
const map_HCZ2 = [
    [O,O,O,O,O,O,O,O],
    [O,O,O,O,E,O,O,O],
    [O,E,J,C,X,C,J,A],
    [O,O,C,T,J,O,C,O],
    [O,E,X,J,X,C,J,O],
    [O,O,C,O,C,O,C,O],
    [O,E,J,C,X,C,J,A],
    [O,O,O,O,E,O,O,O]
];
const map_HCZ2_rotation = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,2,0,0,0],
    [0,1,2,1,0,1,2,2],
    [0,0,0,1,3,0,0,0],
    [0,1,0,0,0,1,3,0],
    [0,0,0,0,0,0,0,0],
    [0,1,0,1,0,1,0,2],
    [0,0,0,0,0,0,0,0]
];
const map_HCZ3 = [
    [O,O,O,O,O,O,O,O],
    [O,E,O,O,E,O,O,O],
    [O,J,C,C,X,C,J,A],
    [O,C,O,O,C,O,C,O],
    [E,X,C,J,T,O,C,O],
    [O,T,C,X,C,T,C,O],
    [O,O,O,E,O,J,J,A],
    [O,O,O,O,O,E,O,O]
];
const map_HCZ3_rotation = [
    [0,0,0,0,0,0,0,0],
    [0,2,0,0,2,0,0,0],
    [0,1,1,1,0,1,2,2],
    [0,0,0,0,0,0,0,0],
    [1,0,1,2,3,0,0,0],
    [0,0,1,0,1,2,0,0],
    [0,0,0,0,0,1,0,2],
    [0,0,0,0,0,0,0,0]
];
const map_HCZ4 = [
    [O,O,O,O,E,O,O,O],
    [O,E,J,C,X,C,T,O],
    [O,O,C,O,C,T,X,A],
    [O,O,J,C,X,T,C,O],
    [O,E,J,O,J,C,J,O],
    [O,O,J,C,J,T,C,O],
    [O,O,E,O,O,J,J,A],
    [O,O,O,O,O,E,O,O]
];
const map_HCZ4_rotation = [
    [0,0,0,0,2,0,0,0],
    [0,1,2,1,0,1,2,0],
    [0,0,0,0,0,1,0,2],
    [0,0,1,1,0,3,0,0],
    [0,1,3,0,1,1,3,0],
    [0,0,1,1,0,2,0,0],
    [0,0,0,0,0,1,0,2],
    [0,0,0,0,0,0,0,0]
];
const map_HCZ5 = [
    [O,O,O,O,O,O,O,O,O],
    [O,E,O,O,O,E,O,O,O],
    [O,J,C,J,C,X,C,J,A],
    [O,C,O,C,T,J,O,C,O],
    [E,X,C,J,J,T,T,C,O],
    [O,T,J,C,X,C,X,J,O],
    [O,O,E,O,E,O,T,J,A]
];
const map_HCZ5_rotation = [
    [0,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,2,0,0,0],
    [0,1,1,2,1,0,1,2,2],
    [0,0,0,0,1,3,0,0,0],
    [1,0,1,0,3,0,2,0,0],
    [0,0,2,1,0,1,0,3,0],
    [0,0,0,0,0,0,0,0,2]
];


const HCZ_maps = [
    {map:map_HCZ1, rotationMap:map_HCZ1_rotation, name:"HCZ1"},
    {map:map_HCZ2, rotationMap:map_HCZ2_rotation, name:"HCZ2"},
    {map:map_HCZ3, rotationMap:map_HCZ3_rotation, name:"HCZ3"},
    {map:map_HCZ4, rotationMap:map_HCZ4_rotation, name:"HCZ4"},
    {map:map_HCZ5, rotationMap:map_HCZ5_rotation, name:"HCZ5"}
];

const map_LCZ1 = [
    [O,O,E,O,O,O,O,O],
    [O,O,J,C,J,E,O,O],
    [O,O,C,O,C,O,O,O],
    [O,E,J,J,X,E,O,O],
    [O,O,O,C,T,C,T,O],
    [O,O,D,J,J,C,X,E],
    [O,O,O,O,C,O,C,O],
    [O,O,O,E,X,C,J,E],
    [O,O,O,O,E,O,O,O]
];
const map_LCZ1_rotation = [
    [0,0,2,0,0,0,0,0],
    [0,0,1,1,2,3,0,0],
    [0,0,0,0,0,0,0,0],
    [0,1,0,2,0,3,0,0],
    [0,0,0,0,0,1,2,0],
    [0,0,0,0,2,1,0,3],
    [0,0,0,0,0,0,0,0],
    [0,0,0,1,0,1,0,3],
    [0,0,0,0,0,0,0,0]
];
const map_LCZ2 = [
    [O,O,O,O,O,O,O,O],
    [O,O,O,E,O,E,O,O],
    [O,O,T,J,C,J,J,E],
    [O,E,J,T,O,T,T,O],
    [O,O,D,X,J,X,E,O],
    [O,E,J,T,C,T,T,O],
    [O,O,J,C,J,C,J,O],
    [O,O,E,O,O,O,E,O]
];
const map_LCZ2_rotation = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,2,0,2,0,0],
    [0,0,1,0,1,0,2,3],
    [0,1,0,2,0,1,3,0],
    [0,0,0,0,2,0,3,0],
    [0,1,2,3,0,0,2,0],
    [0,0,1,1,0,1,3,0],
    [0,0,0,0,0,0,0,0]
];
const map_LCZ3 = [
    [O,O,E,O,E,O,O],
    [O,E,X,C,X,J,E],
    [O,O,T,J,T,C,O],
    [O,O,D,X,C,X,E],
    [O,E,J,J,T,C,O],
    [O,O,C,O,J,T,O],
    [O,O,J,C,J,E,O],
    [O,O,E,O,O,O,O]
];
const map_LCZ3_rotation = [
    [0,0,2,0,2,0,0],
    [0,1,0,1,0,2,3],
    [0,0,0,2,3,0,0],
    [0,0,0,0,1,0,3],
    [0,1,2,0,2,0,0],
    [0,0,0,0,1,3,0],
    [0,0,1,1,0,3,0],
    [0,0,0,0,0,0,0]
];
const map_LCZ4 = [
    [O,O,O,O,O,O,O,O],
    [O,E,O,E,O,E,O,O],
    [E,X,C,X,C,J,T,O],
    [O,C,O,T,T,O,J,E],
    [D,J,T,T,J,T,C,O],
    [O,E,J,J,O,C,J,E],
    [O,O,O,T,C,X,T,O],
    [O,O,O,O,O,E,O,O]
];
const map_LCZ4_rotation = [
    [0,0,0,0,0,0,0,0],
    [0,2,0,2,0,2,0,0],
    [1,0,1,0,1,0,2,0],
    [0,0,0,0,2,0,1,3],
    [0,0,2,1,0,2,0,0],
    [0,1,0,3,0,0,1,3],
    [0,0,0,0,1,0,3,0],
    [0,0,0,0,0,0,0,0]
];
const map_LCZ5 = [
    [O,O,O,O,E,O,E,O],
    [O,E,J,C,J,C,J,O],
    [O,O,C,O,O,D,X,E],
    [O,O,C,O,O,T,J,O],
    [O,E,X,C,J,T,C,O],
    [O,O,T,T,C,T,J,E],
    [O,O,E,J,X,T,O,O],
    [O,O,O,O,E,O,O,O]
];
const map_LCZ5_rotation = [
    [0,0,0,0,2,0,2,0],
    [0,1,2,1,0,1,3,0],
    [0,0,0,0,0,0,0,3],
    [0,0,0,0,0,1,3,0],
    [0,1,0,1,2,3,0,0],
    [0,0,0,2,0,1,0,3],
    [0,0,1,0,0,3,0,0],
    [0,0,0,0,0,0,0,0]
];

const LCZ_maps = [
    {map:map_LCZ1, rotationMap:map_LCZ1_rotation, name:"LCZ1"},
    {map:map_LCZ2, rotationMap:map_LCZ2_rotation, name:"LCZ2"},
    {map:map_LCZ3, rotationMap:map_LCZ3_rotation, name:"LCZ3"},
    {map:map_LCZ4, rotationMap:map_LCZ4_rotation, name:"LCZ4"},
    {map:map_LCZ5, rotationMap:map_LCZ5_rotation, name:"LCZ5"}
];


var user_input = []//[{part:C, x:0, y:0},{part:C,x:1,y:0},{part:J,x:2,y:0},{part:C,x:2,y:1},{part:A,x:2,y:2}]

//Making assumption that center tile is always 0,0
function addToInput(part,cell_x,cell_y){
    console.log("Part: " + part + " X: " + cell_x + " Y: " + cell_y)
    user_input.push({part:part, x:cell_x-5, y:cell_y-4});
    console.log(user_input);
    checkSelectedLevel(user_input);
}

function partTextToEnum(part){
    switch(part){
        case "C":
            return C;
        case "T":
            return T;
        case "J":
            return J;
        case "X":
            return X;
        case "E":
            return E;
        case "A":
            return A;
        case "D":
            return D;
    }
}

var currentLevel  = "EZ"

function checkSelectedLevel(input){
    console.log(`Checking ${currentLevel} maps`);
    var Current_Maps = null;
    switch(currentLevel){
        case "EZ":
            Current_Maps = EZ_maps;
            break;
        case "HCZ":
            Current_Maps = HCZ_maps;
            break;
        case "LCZ":
            Current_Maps = LCZ_maps;
            break;
    }
    if(!Current_Maps){return}
    var allPositions = [];
    for(var i = 0; i < Current_Maps.length; i++){
        var plausiblePostions = checkMap(Current_Maps[i], input);//This is the origin point of the search, player will be at the last position in the array
        if(plausiblePostions.length > 0){
            console.log("Map: " + Current_Maps[i].name);
            //console.log(plausiblePostions);
            allPositions.push(plausiblePostions);
        }
        
    }
    console.log(allPositions);
    if (allPositions.length == 0){
        console.log("No possible maps");
    } else if (allPositions.length == 1){
        if(allPositions[0].length == 1){
            console.log("Found the map " + allPositions[0][0].map);
            var mapObj = Current_Maps.find(x => x.name == allPositions[0][0].map);
            replaceTableWithMap(parseInt(mapObj.name.slice(-1))-1);
            //Todo: Change clicked cell to player position
            var alignedInput = rotateInputTimes(user_input,allPositions[0][0].rotation);
            var table = document.getElementById("grid");
            var cell = table.rows[alignedInput[alignedInput.length-1].y+allPositions[0][0].y].cells[alignedInput[alignedInput.length-1].x+allPositions[0][0].x];
            cell.className = 'current';
            if (lastClicked) lastClicked.className='';
            lastClicked = cell;
            console.log("Player position: " + alignedInput[alignedInput.length-1].x + " " + alignedInput[alignedInput.length-1].y);

            for (var i = 0; i < alignedInput.length-1; i++){
                var cell = table.rows[alignedInput[i].y+allPositions[0][0].y].cells[alignedInput[i].x+allPositions[0][0].x];
                cell.className = 'travelled';
            }
        }
    }
}


function checkEZ(input){
    
}


function checkMap(mapObj, input){
    var map = mapObj.map;
    var mapName = mapObj.name;
    var centerPart = input[0].part;
    var plausiblePostions = [];
    //Itterate through the map
    for(var i = 0; i < map.length; i++){
        for(var j = 0; j < map[i].length; j++){
            //If the map part is the same as the center part
            if(map[i][j] == centerPart){
                //Check if this position is plausible
                for(var k = 0; k < 4; k++){
                    if(travelMap(map,input,j,i)){
                        plausiblePostions.push({x:j,y:i,rotation:k,map:mapName});
                    }
                    input = rotateInput(input);
                }
            }
        }
    }
    return plausiblePostions;
}

function travelMap(map,input, startX, startY) {
    //TODO: Rotate the input and check again
    for(var k = 0; k < input.length; k++){
        const part = input[k].part;
        const x = input[k].x;
        const y = input[k].y;
        //console.log("x: " + x + " y: " + y + " part: " + part);
        //Check if the part is out of bounds
        if(startX+x < 0 || startX+x >= map[0].length || startY+y < 0 || startY+y >= map.length){
            return false;
        }
        if (map[startY+y][startX+x] != part){
            return false;
        }
    }
    return true;
}

function rotateInput(input){
    var rotatedInput = [];
    for(var i = 0; i < input.length; i++){
        rotatedInput.push({part:input[i].part, x:-input[i].y, y:input[i].x});
    }
    return rotatedInput;
}

function rotateInputTimes(input, times){
    for(var i = 0; i < times; i++){
        input = rotateInput(input);
    }
    return input;
}


//checkEZ(user_input);



var lastClicked;
var grid = clickableGrid(9,9,function(el,row,col,i){
    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    console.log("You clicked on item #:",i);

    document.getElementById("myModal").style.display = "block";
    
    el.className='clicked';
    //el.innerHTML = `<img id="img_${i}" class="rotation_0" src="junction_up.png" width="72" height="72" oncontextmenu="rightclickimg(event,id)" />`
    if (lastClicked) lastClicked.className='';
    lastClicked = el;
});


function selectPart(imgURL, part){
    var cell = document.getElementsByClassName("clicked")[0];
    cell.innerHTML = `<img id="img_${cell.id}" class="rotation_0" src="${imgURL}" width="72" height="72" oncontextmenu="rightclickimg(event,id)" />`
    document.getElementById("myModal").style.display = "none";
    //Todo: Add part to user input
    var cell_x = cell.id.split("_")[1]%9;
    
    var cell_y = Math.floor(cell.id.split("_")[1]/9);
    //if (cell_y == 0){ cell_y = 9;}
    if (cell_x == 0){ cell_x = 9; cell_y--;}
    
    addToInput(partTextToEnum(part),cell_x,cell_y);
}

document.body.appendChild(grid);
     
function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    grid.id = "grid";
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            //cell.innerHTML = ++i;
            ++i;
            cell.id = "cell_" + i;
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}

function rightclickimg(event,id){
    event.preventDefault();
    
    switch(document.getElementById(id).classList[0]){
        case "rotation_0":
            document.getElementById(id).classList.replace("rotation_0","rotation_1");
            break;
        case "rotation_1":
            document.getElementById(id).classList.replace("rotation_1","rotation_2");
            break;
        case "rotation_2":
            document.getElementById(id).classList.replace("rotation_2","rotation_3");
            break;
        case "rotation_3":
            document.getElementById(id).classList.replace("rotation_3","rotation_0");
            break;
    }
    //.contains("rotation_0") ? document.getElementById(id).classList.replace("rotation_0","rotation_90") : document.getElementById(id).classList.replace("rotation_90","rotation_0");
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// setTimeout(function(){
//     document.getElementById("cell_41").className='clicked';
//     lastClicked = document.getElementById("cell_41");
//     document.getElementById("myModal").style.display = "block"; 
// }, 10);



// Place map parts on table
function replaceTableWithMap(mapID){//map,rotationMap){
    var table = document.getElementsByClassName("grid")[0];
    var i = 0;
    for (var r=0;r<9;++r){
        for (var c=0;c<9;++c){
            var cell = table.rows[r].cells[c];
            cell.innerHTML = '';
        }
    }
    var map = null;
    var rotationMap = null;
    //alert("Found map: " + mapID + "")
    switch(currentLevel){
        case "EZ":
            map = EZ_maps[mapID].map;
            rotationMap = EZ_maps[mapID].rotationMap;
            break;
        case "HCZ":
            map = HCZ_maps[mapID].map;
            rotationMap = HCZ_maps[mapID].rotationMap;
            break;
        case "LCZ":
            map = LCZ_maps[mapID].map;
            rotationMap = LCZ_maps[mapID].rotationMap;
            break;
    }

    for (var r=0;r<map.length;++r){
        for (var c=0;c<map[0].length;++c){
            var cell = table.rows[r].cells[c];
            var rotation = 0;
            if (rotationMap) rotation = rotationMap[r][c];
            var image = partToImage(map[r][c]);
            if(!image) {cell.innerHTML = ''; continue;}
            cell.innerHTML = `<img id="img_${cell.id}" class="rotation_${rotation}" src="${image}" width="72" height="72" oncontextmenu="rightclickimg(event,id)" />`
            ++i;
        }
    }
}

function partToImage(part){
    switch(part){
        case C:
            return "corridor_v.png";
        case J:
            return "junction_up.png";
        case T:
            return "turn_right_up.png";
        case E:
            return "edge_up.png";
        case X:
            return "crossroads.png";
        case A:
            return "airlock_right.png";
        case D:
            return "d-block_right.png";
        case O:
            return null;
    }
}

function changeLevel(name) {
    this.currentLevel = name;
    //alert("Level changed to " + this.currentLevel);
    //Loop through all elements with class containing "level_button" and remove the class "level_selected"
    var elements = document.getElementsByClassName("level_button");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("level_selected");
    }
    document.getElementById(name).classList.add("level_selected");
}
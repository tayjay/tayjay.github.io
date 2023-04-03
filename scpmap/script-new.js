var user_input = []//[{part:C, x:0, y:0},{part:C,x:1,y:0},{part:J,x:2,y:0},{part:C,x:2,y:1},{part:A,x:2,y:2}]
let user_input_lcz = []
let user_input_hcz = []
let user_input_ez = []

//Making assumption that center tile is always 0,0
function addToInput(part,cell_x,cell_y){
    console.log("Part: " + part + " X: " + cell_x + " Y: " + cell_y)
    switch(currentLevel){
        case "EZ":
            user_input_ez.push({part:part, x:cell_x-5, y:cell_y-4});
            checkSelectedLevel(user_input_ez);
            break;
        case "HCZ":
            user_input_hcz.push({part:part, x:cell_x-5, y:cell_y-4});
            checkSelectedLevel(user_input_hcz);
            break;
        case "LCZ":
            user_input_lcz.push({part:part, x:cell_x-5, y:cell_y-4});
            checkSelectedLevel(user_input_lcz);
            break;
    }
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
let activeGrid = null;

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
            var table = activeGrid
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


var grid_LCZ = generateGrid("LCZ",9,9,document.getElementById("div_lcz"),function(el,row,col,i){
    //check if element contains an image already
    if (el.innerHTML != ""){
        console.log("Element already contains an image");
        rotateImage(`img_${el.id}`);
    } else {
        displayRoomSelector(el.id);
    }
});
var grid_HCZ = generateGrid("HCZ",9,9,document.getElementById("div_hcz"),function(el,row,col,i){
    //check if element contains an image already
    if (el.innerHTML != ""){
        console.log("Element already contains an image");
        rotateImage(`img_${el.id}`);
    } else {
        displayRoomSelector(el.id);
    }
});
var grid_EZ = generateGrid("EZ",9,9,document.getElementById("div_ez"),function(el,row,col,i){
    //check if element contains an image already
    if (el.innerHTML != ""){
        console.log("Element already contains an image");
        rotateImage(`img_${el.id}`);
    } else {
        displayRoomSelector(el.id);
    }
});

function selectPart(imgURL, part){
    var cell = activeCell;
    cell.innerHTML = `<img id="img_${cell.id}" class="rotation_0" src="${imgURL}" width="72" height="72" oncontextmenu="rightclickimg(event,id)" />`
    document.getElementById("myModal").style.display = "none";
    //Todo: Add part to user input
    var cell_x = cell.id.split("_")[2]%9;
    
    var cell_y = Math.floor(cell.id.split("_")[2]/9);
    //if (cell_y == 0){ cell_y = 9;}
    if (cell_x == 0){ cell_x = 9; cell_y--;}
    
    addToInput(partTextToEnum(part),cell_x,cell_y);
}
     
function generateGrid(name, rows, cols, parent, callback){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    grid.id = "grid_" + name;
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            //cell.innerHTML = ++i;
            ++i;
            cell.id = name+"_cell_" + i;
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    grid.style.display = "none";
    parent.appendChild(grid);
    return grid;
}

function rightclickimg(event,id){
    event.preventDefault();
    displayRoomSelector(id);
}

function displayRoomSelector(id){
    //This is the first time the cell is clicked
    var el = document.getElementById(id);
    if (el.id.startsWith("img_")) {
        el = el.parentElement;
    }
    document.getElementById("myModal").style.display = "block";
    //el.className='clicked';
    activeCell = el;
    //el.innerHTML = `<img id="img_${i}" class="rotation_0" src="junction_up.png" width="72" height="72" oncontextmenu="rightclickimg(event,id)" />`
    if (lastClicked) lastClicked.className='';
    lastClicked = el;
}

function rotateImage(id) {
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
    console.log("Rotated image");
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Place map parts on table
function replaceTableWithMap(mapID){//map,rotationMap){
    var table = activeGrid
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
}
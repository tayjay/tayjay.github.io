var user_input = []//[{part:C, x:0, y:0},{part:C,x:1,y:0},{part:J,x:2,y:0},{part:C,x:2,y:1},{part:A,x:2,y:2}]
let user_input_lcz = []
let user_input_hcz = []
let user_input_ez = []

//Making assumption that center tile is always 0,0
function addToInput(part,cell_x,cell_y, tag){
    console.log("Part: " + part + " X: " + cell_x + " Y: " + cell_y + " Tag: " + tag);
    switch(currentLevel){
        case "EZ":
            user_input_ez.push({part:part, x:cell_x-5, y:cell_y-4, tag:tag});
            checkSelectedLevel(user_input_ez);
            break;
        case "HCZ":
            user_input_hcz.push({part:part, x:cell_x-5, y:cell_y-4, tag:tag});
            checkSelectedLevel(user_input_hcz);
            break;
        case "LCZ":
            user_input_lcz.push({part:part, x:cell_x-5, y:cell_y-4, tag:tag});
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
            console.log("User Input:"+input)
            var alignedInput = rotateInputTimes(input,allPositions[0][0].rotation);
            var table = activeGrid
            if(alignedInput.length > 0){
                var cell = table.rows[alignedInput[alignedInput.length-1].y+allPositions[0][0].y].cells[alignedInput[alignedInput.length-1].x+allPositions[0][0].x];
                cell.className = 'current';
                if (lastClicked) lastClicked.className='';
                lastClicked = cell;
                console.log("Player position: " + alignedInput[alignedInput.length-1].x + " " + alignedInput[alignedInput.length-1].y);

                if(alignedInput[alignedInput.length-1].tag != ""){
                    //alert("Adding tag");
                    cell.appendChild(document.createElement('div')).innerHTML = alignedInput[alignedInput.length-1].tag;
                }

                for (var i = 0; i < alignedInput.length-1; i++){
                    var cell1 = table.rows[alignedInput[i].y+allPositions[0][0].y].cells[alignedInput[i].x+allPositions[0][0].x];
                    cell1.className = 'travelled';
                    //////////////////////////
                    //Add tags to map
                    //////////////////////////
                    
                    if(alignedInput[i].tag != ""){
                        //alert("Adding tag");
                        cell1.appendChild(document.createElement('div')).innerHTML = alignedInput[i].tag;
                    }
                }
            } else {
                //alert("No input");
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
        rotatedInput.push({part:input[i].part, x:-input[i].y, y:input[i].x, tag:input[i].tag});
    }
    return rotatedInput;
}

function rotateInputTimes(input, times){
    for(var i = 0; i < times; i++){
        input = rotateInput(input);
    }
    console.log("Rotated map: " +input);
    return input;
}


//checkEZ(user_input);



var lastClicked;


var grid_LCZ = generateGrid("LCZ",9,9,document.getElementById("div_lcz"),function(el,row,col,i){
    if(el.classList.contains('invisible')) return;
    //check if element contains an image already
    if (el.innerHTML != ""){
        console.log("Element already contains an image");
        rotateImage(`img_${el.id}`);
    } else {
        displayRoomSelector(el.id);
    }
    
});
var grid_HCZ = generateGrid("HCZ",9,9,document.getElementById("div_hcz"),function(el,row,col,i){
    if(el.classList.contains('invisible')) return;
    //check if element contains an image already
    if (el.innerHTML != ""){
        console.log("Element already contains an image");
        rotateImage(`img_${el.id}`);
    } else {
        displayRoomSelector(el.id);
    }
    
});
var grid_EZ = generateGrid("EZ",9,9,document.getElementById("div_ez"),function(el,row,col,i){
    if(el.classList.contains('invisible')) return;
    //check if element contains an image already
    if (el.innerHTML != ""){
        console.log("Element already contains an image");
        rotateImage(`img_${el.id}`);
    } else {
        displayRoomSelector(el.id);
    }
    
});

function getCellNeighbours(cell){
    var cell_zone = cell.id.split("_")[0];
    var cell_id = Number.parseInt(cell.id.split("_")[2]);
    var neighbours = [];

    document.getElementById(`${cell_zone}_cell_${cell_id-1}`) ? neighbours.push(document.getElementById(`${cell_zone}_cell_${cell_id-1}`)) : null;
    document.getElementById(`${cell_zone}_cell_${cell_id+1}`) ? neighbours.push(document.getElementById(`${cell_zone}_cell_${cell_id+1}`)) : null;
    document.getElementById(`${cell_zone}_cell_${cell_id-9}`) ? neighbours.push(document.getElementById(`${cell_zone}_cell_${cell_id-9}`)) : null;
    document.getElementById(`${cell_zone}_cell_${cell_id+9}`) ? neighbours.push(document.getElementById(`${cell_zone}_cell_${cell_id+9}`)) : null;
    console.log(neighbours);
    return neighbours;
}

    

function selectPart(imgURL, part){
    var cell = activeCell;
    var zone = cell.id.split("_")[0];
    cell.innerHTML = `<img id="img_${cell.id}" class="rotation_0" src="${imgURL}" width="72" height="72" oncontextmenu="rightclickimg(event,id)" />`
    document.getElementById("myModal").style.display = "none";
    //Todo: Add part to user input
    var cell_x = cell.id.split("_")[2]%9;
    
    var cell_y = Math.floor(cell.id.split("_")[2]/9);
    //if (cell_y == 0){ cell_y = 9;}
    if (cell_x == 0){ cell_x = 9; cell_y--;}

    displayRoomTagger(cell.id,zone, imgURL, part, cell_x, cell_y);
    
    
    
    // Make neighboring cells visible.
    var neighboringCells = getCellNeighbours(cell);
    neighboringCells.forEach(cell1 => {
        console.log(cell1);
        if (cell1) {
            cell1.classList.remove('invisible');
        }
    });

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
            cell.id = name+"_cell_" + (++i); //LCZ_cell_#
            // Check if it is the middle cell. If not, add a class to make it invisible.
            if (!(r === Math.floor(rows/2) && c === Math.floor(cols/2))) {
                cell.classList.add('invisible');
            }
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

function displayRoomTagger(id,zone,img_url, part, cell_x, cell_y){
    console.log(`Displaying room tagger for ${zone} ${part} at ${cell_x},${cell_y}`);
    //Need to get the zone and cell type that was selected
    //Cell type is part between "/" and "."
    //var cellType = img_url.split(".")[0].split("/")[1];

    //Once we have that, we can display the correct tags, like straight in hzc could be server, warhead, hid, etc.
    //Will need to generate a new table with these options as text, and then when one is clicked, it add text to the cell

    let optional = false;

    //First create the table
    var table = document.createElement('table');
    table.className = 'tag_table';
    table.id = "tag_table_" + zone + "_" + part;
    var tr = table.appendChild(document.createElement('tr'));
    //Now need to get the correct tags
    switch(zone){
        case "EZ":
            switch(part){
                case "A":
                    tr.appendChild(document.createElement('td')).innerHTML = "Checkpoint";
                    optional = true;
                    break;
                case "C":
                    tr.appendChild(document.createElement('td')).innerHTML = "Corridor";
                    tr.appendChild(document.createElement('td')).innerHTML = "Two-Story Office";
                    tr.appendChild(document.createElement('td')).innerHTML = "Large Office";
                    tr.appendChild(document.createElement('td')).innerHTML = "Minor Office";
                    tr.appendChild(document.createElement('td')).innerHTML = "Office Hallway Locked";
                    break;
                case "T":
                    tr.appendChild(document.createElement('td')).innerHTML = "Corner Hallway";
                    tr.appendChild(document.createElement('td')).innerHTML = "Intercom Room";
                    break;
                case "X":
                    tr.appendChild(document.createElement('td')).innerHTML = "4-Way Intersection";
                    optional = true;
                    break;
                case "J":
                    tr.appendChild(document.createElement('td')).innerHTML = "3-Way Intersection";
                    optional = true;
                    break;
                case "E":
                    tr.appendChild(document.createElement('td')).innerHTML = "Dead End";
                    tr.appendChild(document.createElement('td')).innerHTML = "Gate A";
                    tr.appendChild(document.createElement('td')).innerHTML = "Gate B";
                    break;
                case "D":
                    tr.appendChild(document.createElement('td')).innerHTML = "Invalid";
                    optional = true;
                    break;
            }
            break;
        case "HCZ":
            switch(part){
                case "A":
                    tr.appendChild(document.createElement('td')).innerHTML = "Checkpoint";
                    optional = true;
                    break;
                case "E":
                    tr.appendChild(document.createElement('td')).innerHTML = "Generic";
                    tr.appendChild(document.createElement('td')).innerHTML = "Elevator A";
                    tr.appendChild(document.createElement('td')).innerHTML = "Elevator B";
                    tr.appendChild(document.createElement('td')).innerHTML = "SCP-079 Containment";
                    tr.appendChild(document.createElement('td')).innerHTML = "SCP-106 Containment";
                    tr.appendChild(document.createElement('td')).innerHTML = "SCP-096 Containment";
                    break;
                case "C":
                    tr.appendChild(document.createElement('td')).innerHTML = "Corridor";
                    tr.appendChild(document.createElement('td')).innerHTML = "Tesla Gate";
                    tr.appendChild(document.createElement('td')).innerHTML = "Warhead Elevator";
                    tr.appendChild(document.createElement('td')).innerHTML = "H.I.D. Armory";
                    tr.appendChild(document.createElement('td')).innerHTML = "SCP-049/173 Containment";
                    tr.appendChild(document.createElement('td')).innerHTML = "Testroom";
                    tr.appendChild(document.createElement('td')).innerHTML = "Server Room";
                    break;
                case "T":
                    tr.appendChild(document.createElement('td')).innerHTML = "Corner Hallway";
                    tr.appendChild(document.createElement('td')).innerHTML = "SCP-939 Containment";
                    break;
                case "X":
                    tr.appendChild(document.createElement('td')).innerHTML = "4-Way Intersection";
                    optional = true;
                    break;
                case "J":
                    tr.appendChild(document.createElement('td')).innerHTML = "3-Way Intersection";
                    tr.appendChild(document.createElement('td')).innerHTML = "Ammo Armory";
                    break;
                case "D":
                    tr.appendChild(document.createElement('td')).innerHTML = "Invalid";
                    optional = true;
                    break;
            }
            break;
        case "LCZ":
            switch(part){
                case "D":
                    tr.appendChild(document.createElement('td')).innerHTML = "CD01";
                    optional = true;
                    break;
                case "A":
                    tr.appendChild(document.createElement('td')).innerHTML = "Invalid";
                    optional = true;
                    break;
                case "E":
                    tr.appendChild(document.createElement('td')).innerHTML = "Generic";
                    tr.appendChild(document.createElement('td')).innerHTML = "EX-A - Checkpoint A";
                    tr.appendChild(document.createElement('td')).innerHTML = "EX-B - Checkpoint B";
                    tr.appendChild(document.createElement('td')).innerHTML = "PC15 - Classroom";
                    tr.appendChild(document.createElement('td')).innerHTML = "GR18 - Glass Room";
                    tr.appendChild(document.createElement('td')).innerHTML = "##00 - Armory";
                    tr.appendChild(document.createElement('td')).innerHTML = "TC01 - Test Chamber";
                    tr.appendChild(document.createElement('td')).innerHTML = "PT00 - Old SCP-173 Containment";
                    tr.appendChild(document.createElement('td')).innerHTML = "#914 - SCP-914 Containment";
                    break;
                case "C":
                    tr.appendChild(document.createElement('td')).innerHTML = "HS - Corridor";
                    tr.appendChild(document.createElement('td')).innerHTML = "WC00 - Washroom";
                    tr.appendChild(document.createElement('td')).innerHTML = "VT00 - Garden Chamber";
                    tr.appendChild(document.createElement('td')).innerHTML = "ALXX - Airlock";
                    break;
                case "T":
                    tr.appendChild(document.createElement('td')).innerHTML = "HC - Corner Hallway";
                    optional = true;
                    break;
                case "X":
                    tr.appendChild(document.createElement('td')).innerHTML = "IX - 4-Way Intersection";
                    optional = true;
                    break;
                case "J":
                    tr.appendChild(document.createElement('td')).innerHTML = "IT - 3-Way Intersection";
                    optional = true;
                    break;
                }
                break;
    }

    //Now add the table to the modal
    var target_table = document.getElementById("tag-table");
    target_table.innerHTML = table.innerHTML;

    var selected_tag = "";
    //Iterate over the table and add event listeners to each cell
    var table_cells = target_table.getElementsByTagName("td");
    for (var i = 0; i < table_cells.length; i++){
        if(i==0){ //Don't want to put a tag when selecting the first option to keep map tidy
            table_cells[i].addEventListener('click',(function(el, part, cell_x, cell_y){
                return function(){
                    
                    document.getElementById("tagModal").style.display = "none";
                    addToInput(partTextToEnum(part),cell_x,cell_y, "");
                    
                }
            })(table_cells[i],part,cell_x,cell_y),false);
            continue;
        }
        table_cells[i].addEventListener('click',(function(el, part, cell_x, cell_yl){
            return function(){
                console.log("Details: "+el.innerHTML+" "+part+" "+cell_x+" "+cell_y)
                lastClicked.appendChild(document.createElement('div')).innerHTML = el.innerHTML;
                document.getElementById("tagModal").style.display = "none";
                addToInput(partTextToEnum(part),cell_x,cell_y, el.innerHTML);
                
            }
        })(table_cells[i],part,cell_x,cell_y),false);
    }

    if(!optional){
    document.getElementById("tagModal").style.display = "block";
    } else {
        addToInput(partTextToEnum(part),cell_x,cell_y, "");
    }
                    

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
            cell.className = 'invisible';
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
            cell.innerHTML = `<img id="img_${cell.id}" class="rotation_${rotation}" src="images/${image}" width="72" height="72" oncontextmenu="rightclickimg(event,id)" />`
            cell.classList.remove('invisible');
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
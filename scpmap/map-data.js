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
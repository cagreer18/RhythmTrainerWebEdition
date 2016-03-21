/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var playerLevel = 3;
var lvl1 = ["wn", "wr"];
var lvl2 = ["qn", "qr", lvl1];
var lvl3 = ["hn", "hr", lvl2];
var capsule = [lvl1, lvl2, lvl3];

function generateTrack(){
   
    var generatedTrack=[];
    var chosenLevel=capsule[playerLevel -1];
     window.alert("test: " + chosenLevel);
}

//function generateTrack() {
//    var chosenLevel = capsule[playerLevel-1];
//    var generatedTrack = [];
//    //pick an item from that level
//    for (i = 4; i < 1; i--) {
//        var randItem = lvl1[Math.floor((Math.random() * lvl1.length) + 1)];
////        Array.isArray(randItem)
//        if (false) {
//           var newRandItem = (Math.floor((Math.random() * randItem.length) + 1));
//            while (Array.isArray(newRandItem)) {
//                newRandItem = ("pepper");
//            }
//            generatedTrack.push(newRandItem);
//        } else if (typeof randItem === "string") {
//            generatedTrack.push(randItem);
//        }
//    }
//    window.alert(generatedTrack);
//    return generatedTrack;
//}
// 
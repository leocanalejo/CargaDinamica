/**
 * Created by Hernan on 21/02/2017.
 */

module.exports.run = function(name) {
    writeFile();
    console.log("funcion run");
}

function writeFile(name,days) {
    console.log("writeFile");
}

function printArrayAsJSON(){
    function printArrayAsJSON(arr){
        requirejs(['uff/printArrayAsJSON.js'],
            function   (printArrayAsJSON) {
                printArrayAsJSON();
            });
    }
}


 let coordinates = [0,0]; // x,y
 let directions = ["N","E","S","W"];
 let commands = ["L","R","M"]
 let currentDirection ="N";


function moveRover(command){ // L, R, M  
    if(directions.indexOf(command) < -1) return false;

    if (command ==="L") {
      let face = directions.findIndex((element) => element === currentDirection);
      
      if(face === 0 ) {
        face = directions.length -1;
      }else{
        face--
      }
      
      currentDirection = directions[face];
    }
  
    if (command ==="R") {
      let face =  directions.findIndex((element) => element === currentDirection);
      if(face === (directions.length -1)){
         face = 0;
      }else{
        face++
      }
      
      currentDirection = directions[face]
    }
  
    if (command ==="M") {
          let xCoordinate = coordinates[0]
          let yCoordinates = coordinates[1]
          if (currentDirection === "E"){
            coordinates = [xCoordinate + 1 , yCoordinates]
          }

          if (currentDirection === "S"){
            coordinates = [xCoordinate , yCoordinates - 1]
          }

          if (currentDirection === "W"){
            coordinates = [ xCoordinate - 1 ,  yCoordinates]
          }

          if (currentDirection === "N"){
            coordinates = [  xCoordinate , yCoordinates + 1]
          }
    
    }
  

    console.log(`currentDirection is: ${currentDirection}` , `coordinates: ${coordinates}`)
    
  
}
moveRover("M")
moveRover("L")
moveRover("L")
moveRover("M")
moveRover("R")
moveRover("R")
moveRover("R")
moveRover("M")
moveRover("M")
moveRover("L")

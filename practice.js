var arr1 = ["Grim", "visaged", "War", "hath", "smooth'd", "his", "wrinkled", "front"];
var highestNumber = temp;

function findTheLongestLength(){
    var temp = 0;
    for(var x = 0; x<arr1.length -1; x++)
    {
      if(arr1[x].length > temp)
      {
        temp = arr1[x];
      }
    }
    return temp;
}
function niceRegularBox(){
  console.log("-----------------");


  for(var x = 0; x < arr1.length; x++)
  {

    console.log("| " + arr1[x]);
    console.log("");
  }

  console.log("------------------");

}

niceRegularBox();

function play() {
  document.getElementById("wheel").style.transform = "rotate(0deg)";
  var randomNum = Math.floor(Math.random() * 8);
  var points = 0;

  console.log(randomNum);

  switch (randomNum) {
    case 0:
      points = 60;
      document.getElementById("wheel").style.animation = "spin0 2s forwards";
      console.log(points);
      break;
    case 1:
      points = 20;
      document.getElementById("wheel").style.animation = "spin1 2s forwards";
      console.log(points);
      break;
    case 2:
      points = 90;
      document.getElementById("wheel").style.animation = "spin2 2s forwards";
      console.log(points);
      break;
    case 3:
      points = 10;
      document.getElementById("wheel").style.animation = "spin3 2s forwards";
      console.log(points);
      break;
    case 4:
      points = 50;
      document.getElementById("wheel").style.animation = "spin4 2s forwards";
      console.log(points);
      break;
    case 5:
      points = 30;
      document.getElementById("wheel").style.animation = "spin5 2s forwards";
      console.log(points);
      break;
    case 6:
      points = 40;
      document.getElementById("wheel").style.animation = "spin6 2s forwards";
      console.log(points);
      break;
    case 7:
      points = 80;
      document.getElementById("wheel").style.animation = "spin 2s forwards";
      console.log(points);
      break;
    default:
      console.log("the output is something else");
  }

  document.getElementById("score").innerHTML = ` ${points}`;
}

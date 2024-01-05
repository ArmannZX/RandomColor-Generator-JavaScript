//Pick 3 randome ColorNumber and add it to array
function PickRandomeColor() {
  const Color = [0, 0, 0];
  for (i = 0; i < 3; i++) {
    Color[i] = Math.floor(Math.random() * 255);
  }
  console.log(Color);
  return Color;
}
//Change Backgroound Color Randomly
function ChangeBGcolorRandome() {
  let background = document.body;
  Color = PickRandomeColor();
  background.style.backgroundColor =
    "rgb(" + Color[0] + "," + Color[1] + "," + Color[2] + ")";
}


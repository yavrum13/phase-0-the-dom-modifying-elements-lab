let coolName = 'yuvie blue';

const testVar = "hi"

//Test #1
const mainElement = document.querySelector("main#main")
// can also add .remove(); to the very end of the previous line,
// but that would make more sense IF it wasn't assigned to the variable.
mainElement.remove();

//Test #2
const newHeader = document.createElement("h1");

//Test #3
newHeader.id = "victory"

//Test #4
switch (coolName){
    case 'yuvie blue':
        newHeader.innerHTML = `${coolName} is the champion!`;
    default:
        newHeader.innerHTML = "dang... nobody is the champion!";
}
//newHeader.innerHTML = "Yuvie is the champion!";

//Test #5
newHeader.className = "victory";
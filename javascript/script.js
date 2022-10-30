//This function accepts the values clicked as a parameter and returns the same to the textbox.
function display(val) {
    document.getElementById('result').value += val;
    return val;
}

/*This function is called when the user clicks on the '=' operator. The variable x accepts
the mathematical expression provided by the user. This expression is evaluated and stored 
in the variable y. The result is displayed in the textbox. */
function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}

//This function clears the screen when the user clicks C. After clicking on this, the result should be an empty string
function clearScreen() {
    document.getElementById('result').value = '';
}


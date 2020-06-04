const myProblem = () => {
    return "To calculate the Mean, add all the numbers together, then divide the total by the number of numbers you added. So for our example: <br>(21 + 18 + 14 + 25 + 20) ÷ 5 = 98 ÷ 5 = 19.6. The average points scored per game is 19.6 points.";
};
const Mean = ( ) => {
    document.getElementById("demo").innerHTML = myProblem();
};
const myProblem1 = () => {
    return "To calculate the median, list the values from smallest to biggest, then locate the number at the center. For our example <br>14, 18, 20, 21, 25 is the values listed from smallest to biggest with 20 being the middle number, or the Median.";
};
const Median = ( ) => {
        document.getElementById("demo1").innerHTML = myProblem1();
};
const myProblem2 = () => {
    return "The mode is the number that appears the most in the data set. In our case, no score repeats, so we do not have a Mode. Be careful! The Mode IS NOT zero. If you answer zero, you are saying the player scored zero points in one of the games and there were multiple games in which the player scored zero points. So you just state 'No Mode' for your answer."
};
const Mode = () => {
    document.getElementById("demo2").innerHTML = myProblem2();
};
const myProblem3 = () => {
    return " ";
};
const Close = () => {
    document.getElementById("demo").innerHTML = myProblem3();
};
const myProblem4 = () => {
    return " ";
};
const Close1 = () => {
    document.getElementById("demo1").innerHTML = myProblem4();
};
const myProblem5 = () => {
    return " ";
};
const Close2 = () => {
    document.getElementById("demo2").innerHTML = myProblem5();
};
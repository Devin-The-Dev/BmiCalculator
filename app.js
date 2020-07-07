// variables: weight in pounds, height in feet and inches, bmi
const BMI = () => {
    // let feet = document.getElementById("feet").value;
    let feet = 5;
    // let inches = document.getElementById("inches").value;
    let inches = 11;
    // let pounds = document.getElementById("weight").value;
    let pounds = 195;
    // convert feet into inches
    let feetToInches = feet * 12;
    let totalInches = feetToInches + inches;
    let bmi = 703 * (pounds / (totalInches * totalInches));
    console.log(bmi.toFixed(1));
    return bmi.toFixed(1);
};

document.getElementById("result").innerHTML = BMI();
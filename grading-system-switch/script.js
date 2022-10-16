
let gradeSubmitButton = document.getElementById('grade-submit-button');

gradeSubmitButton.addEventListener('click', (e) => {
    let gradingInput = document.getElementById('grading-input').value;
    console.log(gradingInput);

    let gradeShow = document.getElementById('grade-show');

    switch (true) {
        case gradingInput >= 90:
            let grade = document.createElement('p');
            console.log("Your Grade is A");
            break;
        case gradingInput >= 80:
            console.log("Your Grade is B");
            break;
        case gradingInput >= 70:
            console.log("Your Grade is C");
            break;
        case gradingInput >= 60:
            console.log("Your Grade is D");
            break;
        default:
            console.log("Your Garde is F")
    }



})
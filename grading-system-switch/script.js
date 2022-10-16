
let gradeSubmitButton = document.getElementById('grade-submit-button');

gradeSubmitButton.addEventListener('click', () => {
    let gradingInput = document.getElementById('grading-input').value;
    console.log(gradingInput);

    let gradeShow = document.getElementById('grade-show');
    let p = document.createElement('p');

    switch (true) {
        case gradingInput >= 90:
            p.innerText = `Your Grade is A`;
            gradeShow.appendChild(p);
            console.log("Your Grade is A");
            break;
        case gradingInput >= 80:
            p.innerText = `Your Grade is B`;
            gradeShow.appendChild(p);
            console.log("Your Grade is B");
            break;
        case gradingInput >= 70:
            p.innerText = `Your Grade is C`;
            gradeShow.appendChild(p);
            console.log("Your Grade is C");
            break;
        case gradingInput >= 60:
            p.innerText = `Your Grade is D`;
            gradeShow.appendChild(p);
            console.log("Your Grade is D");
            break;
        default:
            p.innerText = `Your Grade is F`;
            gradeShow.appendChild(p);
            console.log("Your Garde is F")
    }

})



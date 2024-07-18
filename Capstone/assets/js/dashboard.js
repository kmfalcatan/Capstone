const answers = document.querySelectorAll('.answer');

        // Add a click event listener to each answer
        answers.forEach(answer => {
            answer.addEventListener('click', () => {
                // Remove the 'clicked' class from all answers
                answers.forEach(a => a.classList.remove('clicked'));
                // Add the 'clicked' class to the clicked answer
                answer.classList.add('clicked');
            });
        });

function course(){
    const courseButton = document.querySelector('.courseContainer');

    if(courseButton.style.display === 'none'){
        courseButton.style.display = 'block';
    } else{
        courseButton .style.display = 'none'
    }
}
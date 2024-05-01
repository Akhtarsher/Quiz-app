var formData= document.getElementById("studentForm")

formData. onsubmit= function (e) {
    e.preventDefault();

    // Hide the form
    document.getElementById("studentForm").style.display = "none";
    

    
    // You can add additional logic here, such as submitting the form data to a server
    // using AJAX or performing other actions after the form is submitted
  }
 

    // Array of quiz questions with options and correct answers
    const questions = [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Leveler"],
          answer: 0 // Index of correct answer
        },
        {
          question: "Which tag is used to define an internal style sheet?",
          options: ["<style>", "<css>", "<script>", "<link>"],
          answer: 0
        },
        {
          question: "Which CSS property is used to change the text color of an element?",
          options: ["text-color", "color", "font-color", "foreground-color"],
          answer: 1
        },
        {
          question: "Which HTML tag is used to define an unordered list?",
          options: ["<list>", "<ul>", "<ol>", "<li>"],
          answer: 1
        },
        {
          question: "Which CSS property is used to set the background color of an element?",
          options: ["bgcolor", "background-color", "color", "background"],
          answer: 1
        },
        {
          question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
          options: ["src", "title", "alt", "href"],
          answer: 2
        },
        {
          question: "Which CSS property is used to control the space between the elements inside a box?",
          options: ["padding", "spacing", "margin", "border"],
          answer: 0
        },
        {
          question: "Which HTML tag is used to define a hyperlink?",
          options: ["<link>", "<a>", "<href>", "<hyperlink>"],
          answer: 1
        },
        {
          question: "Which CSS property is used to make text bold?",
          options: ["font-style", "font-weight", "text-style", "text-bold"],
          answer: 1
        },
        {
          question: "Which HTML attribute specifies the URL of the page the link goes to?",
          options: ["link", "src", "href", "url"],
          answer: 2
        }
      ];

       // Function to generate quiz questions dynamically
  function generateQuestions() {
    const questionsContainer = document.getElementById("questionsContainer");
    questionsContainer.innerHTML = ""; // Clear existing questions

    questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.innerHTML = `
        <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
        <div class="form-group">
          ${question.options.map((option, optionIndex) => `
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q${index + 1}" id="q${index + 1}Option${optionIndex + 1}" value="${optionIndex}" required>
              <label class="form-check-label" for="q${index + 1}Option${optionIndex + 1}">${option}</label>
            </div>
          `).join("")}
        </div>
      `;
      questionsContainer.appendChild(questionDiv);
    });
  }

  // Call the generateQuestions function to populate the form with quiz questions
  generateQuestions();

  // Form submission handling
  document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let score = 0;
    questions.forEach((question, index) => {
      const selectedOptionIndex = parseInt(document.querySelector(`input[name="q${index + 1}"]:checked`).value);
      if (selectedOptionIndex === question.answer) {
        score++;
      }
    });

    // Display the score to the user (for demonstration purposes)
    alert(`You scored ${score} out of ${questions.length}`);
  });
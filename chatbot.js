// Define an array of FAQs and their corresponding answers
const faqs = [
  {
    question: "What is the application form deadline of Exam A?",
    answer: "The application form deadline for Exam A is October 31, 2023.",
  },
  {
    question: "What is the application form deadline of Exam B?",
    answer: "The application form deadline for Exam B is December 15, 2023.",
  },
  // Add more FAQs
];

// Function to handle user input and provide responses
function handleUserInput() {
  const userInput = document.getElementById("user-input").value;
  const chatWindow = document.getElementById("chat-window");

  // Create a new chat bubble for the user's question
  const userBubble = document.createElement("div");
  userBubble.classList.add("user-bubble");
  userBubble.textContent = userInput;
  chatWindow.appendChild(userBubble);

  // Find a matching FAQ
  const matchedFAQ = faqs.find((faq) =>
    faq.question.toLowerCase().includes(userInput.toLowerCase())
  );

  // Create a chat bubble with the FAQ answer or a default response
  const botBubble = document.createElement("div");
  botBubble.classList.add("bot-bubble");
  botBubble.textContent = matchedFAQ
    ? matchedFAQ.answer
    : "I'm sorry, but I couldn't find an answer to your question.";
  chatWindow.appendChild(botBubble);

  // Clear the input field
  document.getElementById("user-input").value = "";
}

// Event listener for user input
document.getElementById("user-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleUserInput();
  }
  
});

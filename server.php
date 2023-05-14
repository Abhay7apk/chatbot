<?php
// Handle the user input and return the appropriate response
function handleUserInput($userInput) {
  // Define an array of FAQs and their corresponding answers
  $faqs = [
    [
      'question' => 'What is the application form deadline of Exam A?',
      'answer' => 'The application form deadline for Exam A is October 31, 2023.',
    ],
    [
      'question' => 'What is the application form deadline of Exam B?',
      'answer' => 'The application form deadline for Exam B is December 15, 2023.',
    ],
    // Add more FAQs
  ];

  // Find a matching FAQ
  foreach ($faqs as $faq) {
    if (stripos($faq['question'], $userInput) !== false) {
      return $faq['answer'];
    }
  }

  return "I'm sorry, but I couldn't find an answer to your question.";
}

// Get the user input from the request
$userInput = isset($_POST['userInput']) ? $_POST['userInput'] : '';

// Handle the user input and return the response
$response = handleUserInput($userInput);

// Return the response as JSON
echo json_encode(['response' => $response]);
?>

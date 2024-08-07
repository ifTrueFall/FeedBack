/**
 * Manages customer feedback based on star ratings.
 *
 * - For ratings of 1-4 stars:
 *   - Submits feedback via email to request improvements.
 *   - Displays a thank-you message to the customer.
 *
 * - For 5-star ratings:
 *   - Prompts the customer to leave a review on Etsy or Google.
 */

const formSection = document.getElementById("formSection");
const thankYouMessage = document.getElementById("thankYouMessage");
const reviewPrompt = document.getElementById("reviewPrompt");
const feedbackForm = document.getElementById("feedbackForm");

function showForm(rating) {
  if (rating !== "") {
    formSection.style.display = "flex";
  } else {
    formSection.style.display = "none";
  }
}

feedbackForm.addEventListener("submit", function(event) {
  const rating = document.getElementById("rating").value;
  
  if (rating <= 4) {
    event.preventDefault(); // Prevent page from reloading
    thankYouMessage.style.display = "block";
    feedbackForm.style.display = "none";

    // Submit the form programmatically in the background
    fetch(feedbackForm.action, {
      method: feedbackForm.method,
      body: new FormData(feedbackForm)
    });
  } else {
    // Allow 5-star feedback to submit normally, showing the review prompt
    reviewPrompt.style.display = "block";
    feedbackForm.style.display = "none";
  }
});

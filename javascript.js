document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leadForm");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value,
    };

    try {
      // 🔥 Replace with your exact n8n webhook URL
      const webhookUrl = "https://funky-sole-fully.ngrok-free.app/webhook-test/Leadmagnet";

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Show thank you page after success
      document.getElementById("landing").style.display = "none";
      document.getElementById("thankyou").style.display = "block";

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  });
});

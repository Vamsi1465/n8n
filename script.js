document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leadForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      email: form.email.value
    };

    // Replace with your n8n webhook URL
    const webhookUrl = "https://funky-sole-fully.ngrok-free.app/webhook-test/leadmagnet";

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error("Failed to send data");

      // Show thank-you message
      document.getElementById("landing").style.display = "none";
      document.getElementById("thankyou").style.display = "block";
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error("Error submitting form:", err);
    }
  });
});

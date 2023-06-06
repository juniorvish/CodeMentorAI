async function callBackendAPI(user_message) {
  const response = await fetch("/backend/main.py", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_message }),
  });

  const data = await response.json();
  return data.gpt_message;
}

function copyCode() {
  const displayTextBox = document.getElementById("displayTextBox");
  displayTextBox.select();
  document.execCommand("copy");
}

document.getElementById("sendButton").addEventListener("click", async () => {
  const inputBox = document.getElementById("inputBox");
  const user_message = inputBox.value;
  const gpt_message = await callBackendAPI(user_message);

  const displayTextBox = document.getElementById("displayTextBox");
  displayTextBox.value = gpt_message;
});

document.getElementById("copyButton").addEventListener("click", copyCode);
const sendButton = document.getElementById('sendButton');
const inputText = document.getElementById('inputText');
const responseElement = document.getElementById('response');

sendButton.addEventListener('click', () => {
  const url = 'https://aas4nojujl.execute-api.ap-southeast-1.amazonaws.com/development';
  const data = { key1: inputText.value };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    responseElement.textContent = JSON.stringify(data, null, 2);
    alert('Success!');
  })
  .catch(error => {
    responseElement.textContent = JSON.stringify(error, null, 2);
    alert('Error!');
  });
});
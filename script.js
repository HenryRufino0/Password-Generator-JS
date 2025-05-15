async function generatePassword() {
  const length = document.getElementById('length').value;
  const uppercase = document.getElementById('uppercase').checked;
  const lowercase = document.getElementById('lowercase').checked;
  const digits = document.getElementById('digits').checked;
  const special = document.getElementById('special').checked;

  const url = `/api/generate-password?length=${length}&uppercase=${uppercase}&lowercase=${lowercase}&digits=${digits}&special_chars=${special}`;
  
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById('result').textContent = data.password || 'Error';
}

function savePassword() {
  const password = document.getElementById('result').textContent;
  const blob = new Blob([password], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'password.txt';
  link.click();
}

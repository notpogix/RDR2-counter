let deathCount = 0;
const deathDisplay = document.getElementById('deathCount');

// Simulate chat command input for testing
window.addEventListener('message', (event) => {
  const { command } = event.data;
  if (!command || !command.startsWith('!death')) return;

  const args = command.replace('!death', '').trim();
  if (args === '+1') {
    deathCount++;
  } else if (args === '-1') {
    deathCount = Math.max(0, deathCount - 1);
  } else if (args.startsWith('set')) {
    const num = parseInt(args.split(' ')[1]);
    if (!isNaN(num)) deathCount = num;
  }

  deathDisplay.textContent = deathCount;
});

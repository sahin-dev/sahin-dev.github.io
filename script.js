const username = 'sahin-dev'; // Replace with your GitHub username

async function fetchRepos() {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await response.json();

  const reposContainer = document.getElementById('repos');
  repos.forEach(repo => {
    const repoCard = document.createElement('div');
    repoCard.classList.add('repo-card');
    repoCard.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description || 'No description provided.'}</p>
      <a href="${repo.html_url}" target="_blank">View Repository</a>
    `;
    reposContainer.appendChild(repoCard);
  });
}

fetchRepos();

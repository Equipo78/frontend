module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/Equipo78/frontend',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};

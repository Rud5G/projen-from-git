import { github, release } from 'projen';
import { ProjenProjectFromGit } from './src';

const project = new ProjenProjectFromGit({
  projenrcTs: true,
  author: 'Rudger Gravestein',
  authorAddress: 'rgravestein@lionsville.nl',
  name: '@Rud5G/projen-from-git',
  description: 'A projen project that can be used directly from a git repository w/o publishing.',
  repositoryUrl: 'git@github.com:Rud5G/projen-jsii-git-project.git',
  // license:
  licensed: false,

  stale: false,

  jsiiVersion: '5.5.x',
  typescriptVersion: '5.5.x',

  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp(),
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ['feat', 'fix', 'chore', 'docs', 'ci'],
      },
    },
  },
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: [
      'projen-builder[bot]', // Bot account for upgrade PRs
      'Rud5G', // Auto-approve PRs of main maintainer
    ],
  },

  defaultReleaseBranch: 'main',
  releaseTrigger: release.ReleaseTrigger.scheduled({
    schedule: '0 5 * * 1',
  }),

  workflowBootstrapSteps: [{
    name: 'Update npm',
    run: 'sudo npm i -g npm@8',
  }],
});

project.addGitIgnore('/.idea');

project.synth();
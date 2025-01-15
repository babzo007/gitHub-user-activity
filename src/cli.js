#!/usr/bin/env node
import { program } from 'commander';
import { countCommitsByRepo, getUserEvents } from './utils.js';

program
  .name('github-activity')
  .description('CLI that uses GitHub API to fetch user activity and display it in the terminal')
  .version('1.0.0');

program.argument('<username>', 'the name of the user').action(async username => {
  let url = 'https://api.github.com/users/<username>/events';
  const userUrl = url.replace('<username>', username);
  const events = await getUserEvents(userUrl);
  countCommitsByRepo(events);

  // console.log(eventsFormatted);
});

program.parse();

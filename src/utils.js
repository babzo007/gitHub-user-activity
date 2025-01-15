export async function getUserEvents(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export function countCommitsByRepo(events) {
  // const createEvents = events.filter(e => e.type === 'CreateEvent');
  // const pushEvents = events.filter(e => e.type === 'PushEvent');
  // const publicEvents = events.filter(e => e.type === 'PublicEvent');

  for (let index = 0; index < events.length; index++) {
    const event = events[index];
    switch (event.type) {
      case 'CreateEvent':
        if (event.payload.ref_type === 'repository') {
          console.log(`- Created a new repository named ${event.repo.name}`);
        }
        break;
      case 'PushEvent':
        console.log(`- Pushed`);
        break;
      case 'PublicEvent':
        console.log(`- PublicEvent`);
        break;

      case 'IssuesEvent':
        console.log(`- Opened a new issue in ${event.repo.name}`);
        break;

      default:
        break;
    }
  }

  // commits
  //   const names = events.map(event => event.repo.name);
  //   const namesToMap = new Set();
  //   for (let index = 0; index < names.length; index++) {
  //     const name = names[index];
  //     if (name in namesToMap) {
  //       namesToMap[name]++;
  //     } else {
  //       namesToMap[name] = 1;
  //     }
  //   }
  //   console.log('namesToMap :>> ', namesToMap);
  //   console.log(`- Pushed ${commits.length} commits to kamranahmedse/developer-roadmap`);
  // - Opened a new issue in kamranahmedse/developer-roadmap
  // - Starred kamranahmedse/developer-roadmap
}

export async function LastCommitTag({repository_name}: {repository_name: string}) {
  console.log(repository_name)

  let RepoLastActivity: any;
  try {
    const githubRequest = await fetch(`https://api.github.com/repos/z3roo/${repository_name}/activity?per_page=1`);
    RepoLastActivity = await githubRequest.json();
  }
  catch (err) {
    RepoLastActivity = [{timestamp: 0}]
  }

  const lastPushDate = RepoLastActivity[0].timestamp;

  const timePassed = CalculateTimePassed(lastPushDate);

  return (
    <div>
      <span className="text-red-400">Last update: </span>
      <span>
        {
          Object.keys(timePassed).reduce((acc, val) => {
            if (timePassed.fetch_failed)
              return 'Failed to reach Github API'

            if (timePassed[val] != null)
              return `${timePassed[val]} ${val} ago`

            return acc;
          }, '')
        }
      </span>
    </div>
  )
}

function CalculateTimePassed(lastPushDate: number): {[key: string]: number|null} {
  if (lastPushDate === 0)
    return {
      fetch_failed: 1
    }

  const lastPush = new Date(lastPushDate);
  const now = new Date();

  const difference:number = now.getTime() - lastPush.getTime();
  
  const minutes = Math.floor(difference / 1000 / 60);
  const hours =  Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  return {
    minutes: minutes > 1 ? minutes : 2,
    hours: hours > 1 ? hours : null,
    days: days > 1 ? days : null,
    weeks: weeks > 1 ? weeks : null,
    months: months > 1 ? months : null
  }
}
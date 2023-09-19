export async function LastCommitTag({repository_name}: {repository_name: string}) {
  let repoLastActivity: any;
  try {
    const githubRequest = await fetch(`https://api.github.com/repos/z3roo/${repository_name}/activity?per_page=1`);
    repoLastActivity = await githubRequest.json();
    
    if (Array.isArray(repoLastActivity))
      repoLastActivity = repoLastActivity[0];
    else
      throw new Error();
  }
  catch (err) {
    repoLastActivity = {timestamp: 0}
  }

  const timePassed = CalculateTimePassed(repoLastActivity);

  return (
    <div>
      <span className="text-red-400">Last update: </span>
      <span>{timePassed}</span>
    </div>
  )
}

function CalculateTimePassed(repoLastActivity: any): string {
  if (
    !repoLastActivity ||
    !repoLastActivity.timestamp ||
    repoLastActivity.timestamp === 0
    )
    return 'Failed to reach Github API'

  const lastPush = new Date(repoLastActivity.timestamp);
  const now = new Date();

  const difference:number = now.getTime() - lastPush.getTime();
  
  const minutes = Math.floor(difference / 1000 / 60),
        hours =  Math.floor(minutes / 60),
        days = Math.floor(hours / 24),
        weeks = Math.floor(days / 7),
        months = Math.floor(days / 30);

  const validations:{[key: string]: null|string} = {
    months: months > 1 ? `${months} months ago` : null,
    weeks: weeks > 1 ? `${weeks} weeks ago` : null,
    days: days > 1 ? `${days} days ago` : null,
    hours: hours > 1 ? `${hours} hours ago` : null,
    minutes: minutes > 1 ? `${minutes} minutes ago` : 'now'
  }

  for (const validation in validations) {
    const v = validations[validation];

    if (typeof v === 'string')
      return v;
  }
  
  return 'Failed to calculate time passed'
}
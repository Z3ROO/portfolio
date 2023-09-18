export async function LastCommitTag() {
  const githubRequest = await fetch('https://api.github.com/repos/z3roo/portfolio/activity?per_page=1');
  const RepoLastActivity = await githubRequest.json();
  const lastPushDate = new Date(RepoLastActivity[0].timestamp);

  const timePassed = CalculateTimePassed(lastPushDate);

  return (
    <div>
      <span className="text-red-400">Last update: </span>
      <span>
        {
          Object.keys(timePassed).reduce((acc, val) => {
            if (timePassed[val] != null)
              return `${timePassed[val]} ${val} ago`

            return acc;
          }, '')
        }
      </span>
    </div>
  )
}

function CalculateTimePassed(lastPushDate: Date): {[key: string]: number|null} {
  const now = new Date();

  const difference:number = now.getTime() - lastPushDate.getTime();
  
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
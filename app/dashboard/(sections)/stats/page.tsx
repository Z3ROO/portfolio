
export default async function StatsPage() {
  const wait = () => new Promise((acc, rej) => {
    setTimeout(acc, 1000);
  })

  const test = await wait();

  return (
    <div className="flex flex-col p-4">
      <div className="p-2">
        <h2 className="text-2xl font-bold inline pr-2 align-bottom">Stats: </h2>
      </div>
    </div>
  )
}
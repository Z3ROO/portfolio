export default function Text(props: {children: string|string[]}) {
  let { children } = props;

  if (!Array.isArray(children))
    children = [children];

  return (
    <div className="p-4">
      {
        children.map(t => {
          return (
            <p 
              key={t}
              className={`py-4 text-xl`}
            >{t}</p>
          )
        })
      } 
    </div>
  )
}
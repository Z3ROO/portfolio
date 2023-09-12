export default function Text(props: {text: string|string[]}) {
  let { text } = props;

  if (!Array.isArray(text))
    text = [text];

  return (
    <div className="p-4">
      {
        text.map(t => {
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
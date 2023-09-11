import Image from "next/image";

export default function TextImageBlock(props: {children: string|string[], img: string, alt?: string, reverse?: boolean}) {
  const { children, img, alt, reverse } = props;
  return (
    <div className={`flex py-4 ${reverse && 'flex-row-reverse'}`}>
      <Image className="p-4" src={img} width={500} height={500} alt={alt || ''}/>
      <Text text={children} />
    </div>
  )
}

function Text(props: {text: string|string[]}) {
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
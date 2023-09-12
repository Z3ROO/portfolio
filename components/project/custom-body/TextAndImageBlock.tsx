import Image from "next/image";
import Text from './Text';

export default function TextImageBlock(props: {children: string|string[], img: string, alt?: string, reverse?: boolean}) {
  const { children, img, alt, reverse } = props;
  return (
    <div className={`flex py-4 ${reverse && 'flex-row-reverse'}`}>
      <Image className="p-4" src={img} width={500} height={500} alt={alt || ''}/>
      <Text text={children} />
    </div>
  )
}


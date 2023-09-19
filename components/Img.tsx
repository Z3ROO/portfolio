import Image from "next/image";

interface ImgProps {
  src: string
  width: number
  height: number
  alt: string
  quality?: number
  className?: string
  wClassName?: string
}

export default function Img(props: ImgProps) {
  return (
    <div style={{minWidth: props.width+'px', minHeight: props.height+'px'}}>
      <Image {...props} alt={props.alt} className={`relative z-10 ${props.className}`} />
    </div>
  )
}
import HighlightJs from "@/lib/Highlight";

const mapings: {[key: string]: {language: string, title: string}} = {
  'js': {
    language: 'javascript',
    title: 'Javascript'
  },
  'ts': {
    language: 'typescript',
    title: 'Typescript'
  },
  'command': {
    language: 'bash',
    title: 'Command Line'
  }
}

export default function CodeBlock({ children, syntax }: {children: string, syntax: string}) {
  if (!mapings[syntax])
    return <span className="font-bold text-lg">{`No mapping found for syntax: "${syntax}". `} </span>

  const {language, title} = mapings[syntax];

  return (
    <div className='p-4'>
      <div className='rounded-sm border border-red-500 border-opacity-30 bg-gray-800 shadow-inner'>
        <div className="w-full bg-red-900 bg-opacity-30 p-2 text-sm">
          <span>{title}</span>
        </div>
        <div className="p-4 overflow-x-auto custom-scrollbar">
          <pre>
            <HighlightJs code={children} language={language} />
          </pre>
        </div>
      </div>
    </div>
  )
}
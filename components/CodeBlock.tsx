import HighlightJs from "@/lib/Highlight";

export default function CodeBlock({ children }: {children: string}) {
  return (
    <div className='p-4'>
      <div className='rounded-sm border border-red-500 border-opacity-30 bg-gray-800 shadow-inner'>
        <div className="w-full bg-red-900 bg-opacity-30 p-2 text-sm">
          <span>Typescript</span>
        </div>
        <div className="p-4 overflow-x-auto custom-scrollbar">
          <pre>
            <HighlightJs code={children} />
          </pre>
        </div>
      </div>
    </div>
  )
}
import CodeBlock from '@/components/CodeBlock';
import Text from './Text';

export function TextAndCodeBlock({ children, reverse, syntax }: { children: [string, string|string[]], reverse?: boolean, syntax: string }) {
  return (
    <div className={`flex py-4 ${reverse && 'flex-row-reverse'}`}>
      <div className='w-7/12 flex flex-col justify-center'>
        <CodeBlock {...{syntax}}>
          {children[0]}
        </CodeBlock>
      </div>
      <div className='w-5/12 text-xl'>
        <Text>{children[1]}</Text>
      </div>
    </div>
  );
}
import CodeBlock from '@/components/CodeBlock';
import Text from './Text';

export function TextAndCodeBlock({ children, reverse }: { children: [string, string|string[]], reverse?: boolean }) {
  return (
    <div className={`flex py-4 ${reverse && 'flex-row-reverse'}`}>
      <div className='w-7/12 flex flex-col justify-center'>
        <CodeBlock>
          {children[0]}
        </CodeBlock>
      </div>
      <div className='w-5/12 text-xl'>
        <Text text={children[1]} />
      </div>
    </div>
  );
}
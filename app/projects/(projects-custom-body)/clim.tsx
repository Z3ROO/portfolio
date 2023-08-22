'use client'
import CodeBlock from '@/components/CodeBlock';
import hljs from 'highlight.js';

export default function CLIMCustomBody() {
  return (
    <div>
      <CodeBlock>
        {`
const test = 'value';
const test2 = 'another value';
        `.trim()}
      </CodeBlock>
    </div>
  )
}
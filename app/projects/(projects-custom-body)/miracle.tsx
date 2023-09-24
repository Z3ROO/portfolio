import { SectionH2 } from "@/components/project/custom-body/Section";
import Text from "@/components/project/custom-body/Text";
import { TextAndCodeBlock } from "@/components/project/custom-body/TextAndCodeBlock";

export default function MiracleCustomPage() {
  return (
    <>
      <SectionH2 title="Project setup">
        <TextAndCodeBlock syntax="command">
        {
          [
            `npm create miracle`, [
            'Just run the command `npm create miracle` and after that you\'ll be prompted to choose a name for the project.',
            'After choosing the name a folder will be created for with the name you chose containing the necessary files.'
            ]
          ]
        }
        </TextAndCodeBlock>
      </SectionH2>
      <Text>{[
        'After creating your project, you can include all your application inside the src folder.',
        'The file index.tsx is the root of the project, when the build command is triggered Miracle will look for this file to start bundling.'
      ]}</Text>
      <SectionH2 title="Development mode">
        <TextAndCodeBlock syntax="command">
        {
          [
            `npm run dev`,
            'Using npm scripts'
          ]
        }
        </TextAndCodeBlock>
        <TextAndCodeBlock syntax="command">
        {
          [
            `npx @z3ro/miracle --dev`,
            'Using miracle cli'
          ]
        }
        </TextAndCodeBlock>
        <Text>
          This will start your project on port 8000.
          The project will auto re-bundle any alterations on the code.
        </Text>
      </SectionH2>
      <SectionH2 title="Project build">
        <TextAndCodeBlock syntax="command">
        {
          [
            `npm run build`,
            'Using npm scripts'
          ]
        }
        </TextAndCodeBlock>
        <TextAndCodeBlock syntax="command">
        {
          [
            `npx @z3ro/miracle --build`,
            'Using miracle cli'
          ]
        }
        </TextAndCodeBlock>
        <Text>
          After you created your app, you can run the build command and a bundled output will be create inside a folder named build. 
        </Text>
      </SectionH2>

      <SectionH2 title="Example Application">
        <TextAndCodeBlock syntax="ts">
          {[
            `
import Miracle, {render, useRef, useState} from '@z3ro/miracle';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState<{todo: string, done: boolean}[]>([
    {todo: 'teste1', done: true},
    {todo: 'teste2', done: false},
    {todo: 'teste3', done: true},
    {todo: 'teste4', done: false}
  ]);

  const ref = useRef<any>('Test drive')
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '2em',
      height: '100vh'
    }}>
      <div>
        <h2>To-do list:</h2>
        <div>
          <input onChange={(e:any) => setInput(e.target.value)} value={input} />
          <button 
            onClick={() => {
              if(input.length === 0)
                return;
              setList(prevList => prevList.concat({todo: input, done: false}));
              setInput('');
              ref.current = {todo: input, done: false};
            }}
          >
            add
          </button>
        </div>
        <ul style={{
          listStyle: 'none'
        }}>
          {
            list.map((item, index) => {
              return (
                <li style={{
                  margin: '.75em'
                }}>
                  <span>{item.todo}</span>
                  <button style={{
                    backgroundColor: item.done ? 'lightgreen' : 'red',
                    borderRadius: '5px',
                    border: 'none',
                    boxShadow: '1px 2px 3px black',
                    padding: '.25em .5em',
                    cursor: 'pointer',
                    margin: '0 .75em'
                  }} onClick={()=>{
                    setList(list => {
                      list[index].done = !list[index].done;
                      return list;
                    })
                  }}>{item.done ? 'done' : 'to do'}</button>
                  <button style={{
                    backgroundColor:'red',
                    borderRadius: '5px',
                    border: 'none',
                    boxShadow: '1px 2px 3px black',
                    padding: '.25em .5em',
                    cursor: 'pointer',
                    margin: '0 .75em',
                    color: 'white'
                  }} onClick={()=>{
                    setList(list => {
                      return list.filter((_, i) => i !== index);
                    })
                  }}>x</button>
                </li>
              )
            })
          }
        </ul>
        <div>
          <pre>
            {JSON.stringify(ref, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root')!);
            `,
            [
              'Here we have a simplistic app as example.',
              'This project can be seen at top of this page clicking in the demo button.'
            ]
          ]}
        </TextAndCodeBlock>
      </SectionH2>
    </>
  );
}
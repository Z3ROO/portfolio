'use client'
import CodeBlock from '@/components/CodeBlock';

export default function CLIMCustomBody() {
  return (
    <div>
      <h3 className='text-5xl font-bold'>Package usage</h3>
      <div className='flex pt-10 px-2'>
        <div className='p-4 w-7/12 flex flex-col justify-center'>
          <CodeBlock>
            {`
import CliMaker, { ICommand } from '@z3ro/clim';
            `.trim()}
          </CodeBlock>
        </div>
        <div className='p-4 w-5/12 text-xl'>
          <p className='py-4'>After installing the package through npm or yarn just import it inside your js/ts file.</p>
        </div>
      </div>
      <div className='flex pt-10 px-2'>
        <div className='p-4 w-7/12 flex flex-col justify-center'>
          <CodeBlock>
            {`
const command: ICommand = {
    name: 'Command name',
    title: 'SuperTool',
    action: toolMethod,  
    description: 'The command description',
    help: 'Help message for command.',
    flags:[
        {
            type: 'stdin'
        },
        {
            command: 'recursive',
            alias: 'r',
            type: 'boolean',
            description: 'If this flag is present the behavior will be altered in a certain way.'
        },
        {
            command: 'other',
            alias: 'o',
            type: 'boolean',
            description: 'If this flag is present the behavior will be altered in a certain way.'
        }
    ],
    subCommands: [subCommand]
}
            `.trim()}
          </CodeBlock>
        </div>
        <div className='p-4 w-5/12 text-xl'>
          <p className='py-4'>A command can be configured as plain object.</p>
          <p className='py-4'>The property flags will set all the possible options and you can configure aliases if necessary.</p>
          <p className='py-4'>The aliases can be used together as `-abc` as long as only one of them expects value</p>
        </div>
      </div>
      <div className='flex pt-10 px-2'>
        <div className='p-4 w-7/12 flex flex-col justify-center'>
          <CodeBlock>
            {`
const subCommand: ICommand = {
  name: 'subCommand',
  /* Subcommand */
}

const mainCommand: ICommand = {
  ...commandProperties,
  subCommands: [subCommand]
}
            `.trim()}
          </CodeBlock>
        </div>
        <div className='p-4 w-5/12 text-xl'>
          <p className='py-4'>A command can have subcommands.</p>
          <p className='py-4'>When using the tool the name of the first command wont be used. For subcommands just include another plain object of type `ICommand` in the array of subcommands.</p>
          <p className='py-4'>The subcommands can be called by its name as: `tool subcommand --anyOption`</p>
        </div>
      </div>
      <div className='flex pt-10 px-2'>
        <div className='p-4 w-7/12 flex flex-col justify-center'>
          <CodeBlock>
            {`
function toolMethod(options: any) {
    const {
      stdin,
      recursive,
      other
    } = options; //PARSED ARGUMENTS CAN BE ACCESSED THROUGH \`options\` argument

  
    //STDIN IS CAN BE USED AS SPECIFIED ABOVE
    if (stdin == null) 
      this.log.err("Destination directory must be specified!");
}

new CliMaker(command, { bindThis: true })
            `.trim()}
          </CodeBlock>
        </div>
        <div className='p-4 w-5/12 text-xl'>
          <p className='py-4'>Finally, the intire tool will happen inside a function that expects an options argument containing the parsed options.</p>
          <p className='py-4'>This function have its `this` binded with the constructor so you can call the built-in log functions using `this.log`</p>
        </div>
      </div>
    </div>
  )
}
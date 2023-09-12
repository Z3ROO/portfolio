'use client'
import CodeBlock from '@/components/CodeBlock';
import Section from '@/components/project/custom-body/Section';
import { TextAndCodeBlock } from '@/components/project/custom-body/TextAndCodeBlock';

export default function CLIMCustomBody() {
  return (
    <div>
      <Section title='Package usage'>
        <TextAndCodeBlock>
          {[`
  import CliMaker, { ICommand } from '@z3ro/clim';
              `.trim(),
            "After installing the package through npm or yarn just import it inside your js/ts file."
          ]}
        </TextAndCodeBlock>
        <TextAndCodeBlock>
          {[`
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
              `.trim(),
            [
            "A command can be configured as plain object.",
            "The property flags will set all the possible options and you can configure aliases if necessary.",
            "The aliases can be used together as `-abc` as long as only one of them expects value"
            ]
          ]}
        </TextAndCodeBlock>
        <TextAndCodeBlock>
          {[`
const subCommand: ICommand = {
  name: 'subCommand',
  /* Subcommand */
}

const mainCommand: ICommand = {
  ...commandProperties,
  subCommands: [subCommand]
}
              `.trim(),
            [
            "A command can have subcommands.",
            "When using the tool the name of the first command wont be used. For subcommands just include another plain object of type `ICommand` in the array of subcommands.",
            "The subcommands can be called by its name as: `tool subcommand --anyOption`"
            ]
          ]}
        </TextAndCodeBlock>
        <TextAndCodeBlock>
          {[`
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
            `.trim(),
            [
            "Finally, the intire tool will happen inside a function that expects an options argument containing the parsed options.",
            "This function have its `this` binded with the constructor so you can call the built-in log functions using `this.log`"
            ]
          ]}
        </TextAndCodeBlock>
      </Section>
    </div>
  )
}
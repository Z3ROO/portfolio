import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { BiLogoTypescript } from 'react-icons/bi';
import { MdSecurity, MdScreenshotMonitor, MdArchitecture } from 'react-icons/md';
import { PiPathBold } from 'react-icons/pi';
import { TbWorldWww } from 'react-icons/tb';
import { FiArrowUpRight } from 'react-icons/fi';
import { SectionTitle } from '@/components/SectionTitle';
import { transform } from 'typescript';

export default function SkillSet() {
  return (
    <div>
      <SectionTitle>Skill Set</SectionTitle>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full p-8'>
        <Skill Icon={BiLogoTypescript} title='Fluent Typescript'>
          Any technology, framework or library derived from Javascript sinks in intuitevelly.
        </Skill>
        <Skill Icon={TbWorldWww} title='Web Development'>
          Web development is easy they said. Have you tried to deliver responsive images?
        </Skill>
        <Skill Icon={MdSecurity} title='Web Security/Hacking'>
          To keep one safe, one must know the existing threats and one must know how to threat.
        </Skill>
        <Skill Icon={MdScreenshotMonitor} title='All Screens'>
          Not just responsive design, but all platforms, leveraging web based technologies.
        </Skill>
        <Skill Icon={PiPathBold} title='UX Design'>
          An alchemy of aesthetics and usability, shaping digital journeys that gets the job done without trying.
        </Skill>
        <Skill Icon={MdArchitecture} title='Design and Architecture'>
          A holistic view of the craft makes everything easier.
        </Skill>
      </div>
    </div>
  )
}

function Skill({Icon, children, title}: {Icon: IconType, children: ReactNode, title: string}) {
  return (
    <div className='flex flex-col p-4 rounded-sm bg-gray-600 shadow-md w-full sm:w-64 md:w-72 h-min md:h-72 mx-auto select-none cursor-pointer group transition-all'>
      <div className='h-4 md:h-8 relative'>
        <div className='absolute -top-12 -left-0 text-red-400 text-6xl md:text-7xl mb-2 w-min'>
          <Icon style={{
            filter:'drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))'
          }}/>
        </div>
      </div>
      <p className='text-xl text-red-400 my-2 border-t-2 border-red-400 w-min whitespace-nowrap'>{title}</p>
      <p className='hidden md:block grow'>{children}</p>
      <div className='text-red-300 text-right group-hover:text-red-400 transition-all'>
        <span>Learn more</span>
        <span className='text-red-200 group-hover:text-red-400 transition-all'>
          <FiArrowUpRight className='inline-block' />
        </span>
      </div>
    </div>
  )
}
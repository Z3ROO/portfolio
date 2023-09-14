import { BiLogoTypescript, BiLogoMongodb, BiLogoTailwindCss } from 'react-icons/bi';
import { IoLogoNodejs } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';
import { IconType } from 'react-icons';
import { SiStyledcomponents, SiNextdotjs, SiReactquery, SiJest, SiExpress } from 'react-icons/si';
import { CgBrowser } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { DiNpm } from 'react-icons/di';

const IconReference: { [key: string]: IconType } = {
  'typescript': BiLogoTypescript,
  'reactjs': FaReact,
  'react-query': SiReactquery,
  'tailwindcss': BiLogoTailwindCss,
  'styled-components': SiStyledcomponents,
  'nodejs': IoLogoNodejs,
  'expressjs': SiExpress,
  'mongodb': BiLogoMongodb,
  'nextjs': SiNextdotjs,
  'jest': SiJest,
  'no-icon': GrTechnology,
  'browser': CgBrowser,
  'github': BsGithub,
  'npm': DiNpm
}

export default IconReference

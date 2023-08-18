import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoNodejs } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';
import { IconType } from 'react-icons';
import { SiStyledcomponents } from 'react-icons/si';

const IconReference: { [key: string]: IconType } = {
  'typescript': BiLogoTypescript,
  'reactjs': FaReact,
  'nodejs': IoLogoNodejs,
  'styled-components': SiStyledcomponents,
  'no-icon': GrTechnology
}

export default IconReference

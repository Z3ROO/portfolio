import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoNodejs } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';
import { IconType } from 'react-icons';


const IconReference: { [key: string]: IconType } = {
  'typescript': BiLogoTypescript,
  'reactjs': FaReact,
  'nodejs': IoLogoNodejs,
  'no-icon': GrTechnology
}

export default IconReference
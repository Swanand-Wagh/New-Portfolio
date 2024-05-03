import { BsFillBootstrapFill } from 'react-icons/bs';
import { FaJava } from 'react-icons/fa';
import {
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPwa,
  SiReact,
  SiRedux,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiWordpress,
  SiHtml5,
  SiSpring,
  SiMysql,
  SiMongodb,
  SiAzuredevops,
  SiDocker,
  SiLinux,
  SiPython,
  SiSolidity,
  SiUnity,
  SiMantine,
  SiKubernetes,
  SiSass,
  SiCsharp,
  SiIpfs,
  SiOpenai,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  OpenAI: <SiOpenai size={iconSize} className='text-black-600' />,
  Spring: <SiSpring size={iconSize} className='text-green-600' />,
  IPFS: <SiIpfs size={iconSize} className='text-teal-400' />,
  'C#': <SiCsharp size={iconSize} className='text-purple-700' />,
  SCSS: <SiSass size={iconSize} className='text-pink-500' />,
  Kubernetes: <SiKubernetes size={iconSize} className='text-blue-600' />,
  Mantine: <SiMantine size={iconSize} className='text-teal-500' />,
  HTML5: <SiHtml5 size={iconSize} className='text-orange-500' />,
  Java: <FaJava size={iconSize} className='text-red-600' />,
  MySQL: <SiMysql size={iconSize} className='text-blue-500' />,
  MongoDB: <SiMongodb size={iconSize} className='text-green-500' />,
  Azure: <SiAzuredevops size={iconSize} className='text-blue-600' />,
  Docker: <SiDocker size={iconSize} className='text-blue-400' />,
  Linux: <SiLinux size={iconSize} className='text-white-400' />,
  Python: <SiPython size={iconSize} className='text-yellow-400' />,
  Solidity: <SiSolidity size={iconSize} className='text-purple-600' />,
  Unity3D: <SiUnity size={iconSize} className='text-gray-700' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-300' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-600' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-teal-500' />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-indigo-500' />
  ),
  WordPress: <SiWordpress size={iconSize} />,
  'Material UI': <SiMui size={iconSize} className='text-sky-400' />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-400' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-400' />,
  Redux: <SiRedux size={iconSize} className='text-purple-600' />,
  Webpack: <SiWebpack size={iconSize} className='text-blue-400' />,
  'Styled Components': (
    <SiStyledcomponents size={iconSize} className='text-pink-500' />
  ),
  PWA: <SiPwa size={iconSize} className='text-amber-600' />,
  Storybook: <SiStorybook size={iconSize} className='text-pink-400' />,
  CSS: <SiCss3 size={iconSize} className='text-indigo-500' />,
};

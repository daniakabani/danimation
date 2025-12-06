import { Mail, File } from 'lucide-react' // Using lucide icons for a cleaner look
import { Linkedin, Github } from '@/assets/svg'

export const contactLinks = [
  {
    name: 'LinkedIn',
    icon: <Linkedin className='h-6 w-6' />,
    href: 'https://linkedin.com/in/daniakabani',
    description: "Let's connect professionally and discuss opportunities.",
  },
  {
    name: 'GitHub',
    icon: <Github className='h-6 w-6' />,
    href: 'https://github.com/daniakabani',
    description: 'Explore my repositories, open-source work, and code standards.',
  },
  {
    name: 'Medium',
    icon: <File className='h-6 w-6' />,
    href: 'https://medium.com/@daniakabani',
    description: 'Read my detailed articles on architecture and engineering trade-offs.',
  },
  {
    name: 'Email Direct',
    icon: <Mail className='h-6 w-6' />,
    href: 'mailto:daneakabane@gmail.com',
    description: 'For direct, non-form based communication.',
  },
]

import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Tech Wizard',
    description: 'Your go-to solution for modern web applications',
  } as NextSeoProps,
  termsUrl: 'https://example.com/terms',
  privacyUrl: 'https://example.com/privacy',
  header: {
    links: [
      {
        id: 'about',
        label: 'About Us',
      },
      {
        id: 'services',
        label: 'Services',
      },
      {
        id: 'contact',
        label: 'Contact',
      },
      {
        label: 'Sign In',
        href: '/signin',
      },
      {
        label: 'Join Now',
        href: '/join',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Created with care by{' '}
        <Link href="https://twitter.com/TechWizardDev">John Doe</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:support@techwizard.dev',
        label: 'Support',
      },
      {
        href: 'https://twitter.com/tech_wizard',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/techwizard/tech-ui',
        label: <FaGithub size="14" />,
      },
      {
        href: 'https://linkedin.com/company/techwizard',
        label: <FaLinkedin size="14" />,
      },
    ],
  },
  signup: {
    title: 'Get Started with Tech Wizard',
    features: [
      {
        icon: FiCheck,
        title: 'Modern Design',
        description: 'Our components are designed with the latest UI trends.',
      },
      {
        icon: FiCheck,
        title: 'Mobile First',
        description:
          'Responsive and optimized for all devices, from mobile to desktop.',
      },
      {
        icon: FiCheck,
        title: 'Extensible',
        description:
          'Easily extend or override components to suit your project needs.',
      },
      {
        icon: FiCheck,
        title: 'Fast Development',
        description:
          'Boost your productivity with pre-built components and minimal setup.',
      },
    ],
  },
}

export default siteConfig

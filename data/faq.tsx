import * as React from 'react'

const faq = {
  title: 'Frequently Asked Questions',
  items: [
    {
      q: 'What are the system requirements to use Tech UI?',
      a: (
        <>
          Tech UI is built to work on modern web browsers. We recommend using the
          latest versions of Chrome, Firefox, Safari, or Edge for the best
          experience. It is also fully responsive, so you can access it on any
          device, including mobile and tablets.
        </>
      ),
    },
    {
      q: 'Is Tech UI compatible with React?',
      a: "Yes, Tech UI is built with React components and works seamlessly within any React-based project.",
    },
    {
      q: 'Can I customize the components in Tech UI?',
      a: 'Yes, all components in Tech UI are highly customizable with props, styles, and themes. You can adjust them to match your brand identity.',
    },
    {
      q: 'Is Tech UI open-source?',
      a: 'Yes, Tech UI offers an open-source version under the MIT License, and we are actively developing new features and enhancements to the library.',
    },
    {
      q: 'Do you offer support for Tech UI?',
      a: 'We provide community support via GitHub issues and our Discord server. If you need premium support, you can purchase a support plan.',
    },
  ],
}

export default faq

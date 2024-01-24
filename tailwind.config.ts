import type { Config } from 'tailwindcss'

const tags = [
  'px',
  'py',
  'p',
  'pr',
  'pl',
  'pt',
  'pb',
  'm',
  'mr',
  'ml',
  'mt',
  'mb',
].join('|')
const pattern = `(?<prop>${tags})=((\{|")(?<number>\\d+)(\}|")|(\{|")(?<string>\\[?\\w+\\]?)(\}|"))`
const regexAll = new RegExp(pattern, 'g')
const regex = new RegExp(pattern)

const config: Config = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract: (content) => {
      let classNames = ''
      const matches = content.match(regexAll)

      matches?.forEach((match) => {
        const values = match.match(regex)

        if (values?.groups?.prop && values?.groups.number) {
          classNames += `${values.groups?.prop}-${values.groups?.number} `
        }

        if (values?.groups?.prop && values?.groups.string) {
          classNames += `${values.groups?.prop}-[${values.groups?.string}] `
        }
      })

      const defaultMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g)
      console.log(classNames)
      const customMatches = classNames.match(/[^<>"'`\s]*[^<>"'`\s:]/g)

      return [...(defaultMatches || []), ...(customMatches || [])]
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

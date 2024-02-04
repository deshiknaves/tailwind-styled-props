import { resolveClassName } from './resolveClassName'

const tags = [
  'aspect',
  'w',
  'h',
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
const pattern = `(?<prop>${tags})=((\{|")(?<number>\\d+)(\}|")|(\{|")(?<string>\\[?\\w+\\/?\\w+?\\]?)(\}|"))`
const regexAll = new RegExp(pattern, 'g')
const regex = new RegExp(pattern)

export function extractProps(content: string) {
  let classNames = ''
  const matches = content.match(regexAll)

  matches?.forEach((match) => {
    const values = match.match(regex)

    if (values?.groups?.prop && values?.groups.number) {
      classNames += `${resolveClassName(
        values.groups?.prop,
        Number(values.groups?.number)
      )} `
    }

    if (values?.groups?.prop && values?.groups.string) {
      classNames += `${resolveClassName(
        values.groups?.prop,
        values.groups?.string
      )} `
    }
  })

  const defaultMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g)
  const customMatches = classNames.match(/[^<>"'`\s]*[^<>"'`\s:]/g)

  return [...(defaultMatches || []), ...(customMatches || [])]
}

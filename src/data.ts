export type CategoryKey =
  | 'converters'
  | 'generators'
  | 'text'
  | 'calculators'
  | 'image'
  | 'dev'

export interface Category {
  key: CategoryKey
  label: string
  color: string // tailwind color name
  hex: string
  description: string
}

export const categories: Category[] = [
  {
    key: 'converters',
    label: 'Converters',
    color: 'sky',
    hex: '#34B3F1',
    description: 'Units, currency, timezones and file sizes, converted on-device.',
  },
  {
    key: 'generators',
    label: 'Generators',
    color: 'violet',
    hex: '#8C6BFF',
    description: 'Passwords, QR codes, UUIDs and placeholder text on demand.',
  },
  {
    key: 'text',
    label: 'Text Tools',
    color: 'coral',
    hex: '#FF5D73',
    description: 'Count, clean, diff and reshape text without leaving the app.',
  },
  {
    key: 'calculators',
    label: 'Calculators',
    color: 'amber',
    hex: '#FFB100',
    description: 'BMI, tips, loans and percentages, worked out instantly.',
  },
  {
    key: 'image',
    label: 'Image Tools',
    color: 'mint',
    hex: '#2FD8A3',
    description: 'Compress, resize, crop and convert images locally.',
  },
  {
    key: 'dev',
    label: 'Dev Tools',
    color: 'indigo',
    hex: '#5B4FE0',
    description: 'JSON, regex, hashes and colors for quick dev checks.',
  },
]

export interface Tool {
  name: string
  category: CategoryKey
}

export const tools: Tool[] = [
  { name: 'Unit Converter', category: 'converters' },
  { name: 'Currency Rates', category: 'converters' },
  { name: 'Timezone Converter', category: 'converters' },
  { name: 'Base64 Encode/Decode', category: 'converters' },
  { name: 'File Size Converter', category: 'converters' },
  { name: 'Password Generator', category: 'generators' },
  { name: 'QR Code Generator', category: 'generators' },
  { name: 'UUID Generator', category: 'generators' },
  { name: 'Lorem Ipsum Generator', category: 'generators' },
  { name: 'Random Number Picker', category: 'generators' },
  { name: 'Word & Character Counter', category: 'text' },
  { name: 'Case Converter', category: 'text' },
  { name: 'Text Diff Checker', category: 'text' },
  { name: 'Find & Replace', category: 'text' },
  { name: 'BMI Calculator', category: 'calculators' },
  { name: 'Tip Calculator', category: 'calculators' },
  { name: 'Percentage Calculator', category: 'calculators' },
  { name: 'Age Calculator', category: 'calculators' },
  { name: 'Loan / EMI Calculator', category: 'calculators' },
  { name: 'Image Compressor', category: 'image' },
  { name: 'Image Resizer', category: 'image' },
  { name: 'Image Cropper', category: 'image' },
  { name: 'Format Converter (PNG/JPG/WEBP)', category: 'image' },
  { name: 'Color Picker', category: 'image' },
  { name: 'JSON Formatter', category: 'dev' },
  { name: 'Regex Tester', category: 'dev' },
  { name: 'Hash Generator (MD5/SHA)', category: 'dev' },
  { name: 'Color Code Converter', category: 'dev' },
  { name: 'Markdown Previewer', category: 'dev' },
]

export const categoryColorMap: Record<CategoryKey, Category> = categories.reduce(
  (acc, c) => ({ ...acc, [c.key]: c }),
  {} as Record<CategoryKey, Category>,
)

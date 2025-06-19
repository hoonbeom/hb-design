# HB Design System

A modern, accessible design system built with React, TypeScript, and Tailwind CSS. Inspired by Radix UI, this library provides a comprehensive set of reusable UI components for building beautiful and consistent user interfaces.

## Features

- 🎨 **Modern Design**: Clean, accessible components built with Tailwind CSS
- ⚡ **TypeScript**: Full TypeScript support with excellent type safety
- 🔧 **Flexible**: Customizable components with comprehensive props
- 📦 **Tree-shakable**: Import only what you need to keep your bundle size minimal
- 🚀 **Fast**: Built with Vite for optimal development and build performance
- 🎯 **Accessible**: Components follow accessibility best practices

## Installation

```bash
npm install @hb-design/ui
```

## Quick Start

```tsx
import { Button } from '@hb-design/ui/ui/input/button'
import { Card } from '@hb-design/ui/ui/display/card'
import { Input } from '@hb-design/ui/ui/input/input'

function App() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  )
}
```

## Component Categories

### Input Components
Components for user input and interaction.

- **Button** - Versatile button component with multiple variants
- **Input** - Text input field with validation states
- **Select** - Dropdown selection component

```tsx
import { Button } from '@hb-design/ui/ui/input/button'
import { Input } from '@hb-design/ui/ui/input/input'
import { Select } from '@hb-design/ui/ui/input/select'
```

### Display Components
Components for displaying content and information.

- **Avatar** - User profile pictures and initials
- **Badge** - Status indicators and labels
- **Card** - Content containers with various styles
- **Icon** - Icon component system
- **Typography** - Text components (Heading, Text)

```tsx
import { Avatar } from '@hb-design/ui/ui/display/avatar'
import { Badge } from '@hb-design/ui/ui/display/badge'
import { Card } from '@hb-design/ui/ui/display/card'
import { Heading, Text } from '@hb-design/ui/ui/display/typography'
```

### Feedback Components
Components for providing user feedback and status information.

- **Alert** - Error and success messages
- **Modal** - Dialog and modal windows
- **Spinner** - Loading indicators
- **Tooltip** - Contextual help and information

```tsx
import { Alert } from '@hb-design/ui/ui/feedback/error'
import { Modal } from '@hb-design/ui/ui/feedback/dialog'
import { Spinner } from '@hb-design/ui/ui/feedback/loading'
import { Tooltip } from '@hb-design/ui/ui/feedback/tooltip'
```

### Navigation Components
Components for navigation and menu systems.

- **Dropdown** - Dropdown menus and selectors
- **Tabs** - Tabbed interface components

```tsx
import { Dropdown } from '@hb-design/ui/ui/navigation/dropdown'
import { Tabs } from '@hb-design/ui/ui/navigation/tabs'
```

## Import Patterns

You can import components in several ways:

### Individual Components (Recommended)
```tsx
import { Button } from '@hb-design/ui/ui/input/button'
import { Card } from '@hb-design/ui/ui/display/card'
```

### Category Imports
```tsx
import { Button, Input, Select } from '@hb-design/ui/ui/input'
import { Card, Badge, Avatar } from '@hb-design/ui/ui/display'
```

### All Components
```tsx
import { Button, Card, Input, Badge } from '@hb-design/ui'
```

## Styling

The design system uses Tailwind CSS for styling. Make sure you have Tailwind CSS installed in your project:

```bash
npm install tailwindcss
```

Include the design system styles in your CSS:

```css
@import '@hb-design/ui/styles';
```

## Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the library
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Project Structure

```
src/
├── ui/
│   ├── input/          # Input components
│   │   ├── button/
│   │   ├── input/
│   │   └── select/
│   ├── display/        # Display components
│   │   ├── avatar/
│   │   ├── badge/
│   │   ├── card/
│   │   ├── icon/
│   │   └── typography/
│   ├── feedback/       # Feedback components
│   │   ├── dialog/
│   │   ├── error/
│   │   ├── loading/
│   │   └── tooltip/
│   └── navigation/     # Navigation components
│       ├── dropdown/
│       └── tabs/
├── lib/                # Utility functions
└── styles.css          # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run the build and lint commands
6. Submit a pull request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions and support, please open an issue on GitHub. 
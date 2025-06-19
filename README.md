# HB Design System

A modern, accessible design system built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, accessible components with consistent styling
- ⚡ **TypeScript**: Full TypeScript support with proper type definitions
- 🎯 **Tailwind CSS**: Built on Tailwind CSS for consistent design tokens
- 📦 **Tree Shaking**: Optimized bundle size with proper exports
- 🚀 **Vite**: Fast build system with hot module replacement

## Installation

```bash
npm install @hb-design/ui
```

## Usage

### Basic Setup

First, install the package and its peer dependencies:

```bash
npm install @hb-design/ui react react-dom
```

### Import Components

```tsx
import { Button, Input, Card, Badge } from '@hb-design/ui'

function App() {
  return (
    <div className="p-4">
      <Card>
        <Card.Header>
          <Card.Title>Welcome</Card.Title>
          <Card.Description>This is a sample card</Card.Description>
        </Card.Header>
        <Card.Content>
          <Input label="Email" placeholder="Enter your email" />
          <Button variant="primary" className="mt-4">
            Submit
          </Button>
        </Card.Content>
      </Card>
    </div>
  )
}
```

### Import Styles

Make sure to import the CSS file in your main application file:

```tsx
import '@hb-design/ui/styles'
```

## Components

### Button

```tsx
import { Button } from '@hb-design/ui'

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Loading state
<Button loading>Loading...</Button>
```

### Input

```tsx
import { Input } from '@hb-design/ui'

<Input label="Email" placeholder="Enter your email" />
<Input label="Password" type="password" error="Password is required" />
<Input label="Username" helperText="Choose a unique username" />
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@hb-design/ui'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Badge

```tsx
import { Badge } from '@hb-design/ui'

<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
```

### Avatar

```tsx
import { Avatar } from '@hb-design/ui'

<Avatar src="/path/to/image.jpg" alt="User" />
<Avatar alt="John Doe" /> {/* Shows initials */}
<Avatar size="lg" alt="User" />
```

### Modal

```tsx
import { Modal } from '@hb-design/ui'

const [isOpen, setIsOpen] = useState(false)

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <h2>Modal Title</h2>
  <p>Modal content goes here</p>
  <Button onClick={() => setIsOpen(false)}>Close</Button>
</Modal>
```

### Dropdown

```tsx
import { Dropdown, DropdownItem } from '@hb-design/ui'

<Dropdown trigger={<Button>Open Menu</Button>}>
  <DropdownItem onClick={() => console.log('Item 1')}>
    Item 1
  </DropdownItem>
  <DropdownItem onClick={() => console.log('Item 2')}>
    Item 2
  </DropdownItem>
</Dropdown>
```

### Tabs

```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@hb-design/ui'

<Tabs>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>Content 1</TabPanel>
    <TabPanel>Content 2</TabPanel>
  </TabPanels>
</Tabs>
```

### Alert

```tsx
import { Alert } from '@hb-design/ui'

<Alert variant="info">This is an info message</Alert>
<Alert variant="success">This is a success message</Alert>
<Alert variant="warning">This is a warning message</Alert>
<Alert variant="error">This is an error message</Alert>
```

### Spinner

```tsx
import { Spinner } from '@hb-design/ui'

<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" color="primary" />
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
- `npm run preview` - Preview the build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Design Tokens

The design system uses a consistent set of design tokens:

### Colors

- **Primary**: Blue scale (50-900)
- **Gray**: Neutral gray scale (50-900)
- **Success**: Green scale
- **Warning**: Yellow scale
- **Error**: Red scale

### Spacing

- Consistent spacing scale based on Tailwind's spacing system
- Custom spacing values: `18` (4.5rem), `88` (22rem)

### Typography

- **Font Family**: Inter (with system fallbacks)
- **Font Sizes**: Tailwind's text scale
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Shadows

- **Soft**: Subtle elevation
- **Medium**: Standard elevation
- **Large**: High elevation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

All components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance 
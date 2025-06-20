import {
  Heading,
  Text,
  Avatar,
  Badge,
  Card,
  Button,
  Input,
  Select,
  Alert,
  Modal,
  Spinner,
  Tooltip,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Dropdown,
  DropdownItem,
} from './index';
import { useState } from 'react';

const selectOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="text-center">
          <Heading level={1}>HB Design System</Heading>
          <Text variant="large" className="text-gray-600">
            A modern design system built with React, TypeScript, and Tailwind
            CSS
          </Text>
        </div>

        {/* Typography */}
        <Card>
          <Heading level={2}>Typography</Heading>
          <div className="space-y-2">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Text variant="large">Large text</Text>
            <Text variant="body">Body text</Text>
            <Text variant="caption">Caption text</Text>
          </div>
        </Card>

        {/* Buttons */}
        <Card>
          <Heading level={2}>Buttons</Heading>
          <div className="mb-2 flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
          <div className="mb-2 flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Card>

        {/* Badges */}
        <Card>
          <Heading level={2}>Badges</Heading>
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
        </Card>

        {/* Avatars */}
        <Card>
          <Heading level={2}>Avatars</Heading>
          <div className="flex items-center gap-4">
            <Avatar alt="User" />
            <Avatar alt="Jane Doe" size="lg" />
            <Avatar alt="John Doe" size="xl" />
          </div>
        </Card>

        {/* Cards */}
        <Card>
          <Heading level={2}>Cards</Heading>
          <Card>
            <Heading level={3}>Card Title</Heading>
            <Text variant="body">This is a card content example.</Text>
          </Card>
        </Card>

        {/* Inputs & Select */}
        <Card>
          <Heading level={2}>Inputs & Select</Heading>
          <div className="space-y-4">
            <Input label="Email" placeholder="Enter your email" />
            <Input
              label="Password"
              type="password"
              error="Password is required"
            />
            <Input label="Username" helperText="Choose a unique username" />
            <Select
              label="Country"
              options={selectOptions}
              placeholder="Select a country"
            />
          </div>
        </Card>

        {/* Alerts */}
        <Card>
          <Heading level={2}>Alerts</Heading>
          <div className="space-y-2">
            <Alert variant="info">This is an informational message</Alert>
            <Alert variant="success">Operation completed successfully</Alert>
            <Alert variant="warning">Please review your input</Alert>
            <Alert variant="error">An error occurred while processing</Alert>
          </div>
        </Card>

        {/* Spinners */}
        <Card>
          <Heading level={2}>Spinners</Heading>
          <div className="flex items-center gap-4">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </Card>

        {/* Tooltips */}
        <Card>
          <Heading level={2}>Tooltips</Heading>
          <div className="flex gap-4">
            <Tooltip content="This is a tooltip">
              <Button variant="outline">Hover me</Button>
            </Tooltip>
            <Tooltip content="Tooltip on the right" position="right">
              <Button variant="outline">Right tooltip</Button>
            </Tooltip>
          </div>
        </Card>

        {/* Tabs */}
        <Card>
          <Heading level={2}>Tabs</Heading>
          <Tabs defaultIndex={tab}>
            <TabList>
              <Tab onSelect={() => setTab(0)}>Tab 1</Tab>
              <Tab onSelect={() => setTab(1)}>Tab 2</Tab>
              <Tab onSelect={() => setTab(2)}>Tab 3</Tab>
            </TabList>
            <TabPanels>
              <TabPanel isActive={tab === 0}>
                <Text>Content for tab 1</Text>
              </TabPanel>
              <TabPanel isActive={tab === 1}>
                <Text>Content for tab 2</Text>
              </TabPanel>
              <TabPanel isActive={tab === 2}>
                <Text>Content for tab 3</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>

        {/* Dropdown */}
        <Card>
          <Heading level={2}>Dropdown</Heading>
          <Dropdown
            trigger={<Button variant="outline">Open Menu</Button>}
            align="left"
          >
            <DropdownItem onClick={() => alert('Item 1')}>Item 1</DropdownItem>
            <DropdownItem onClick={() => alert('Item 2')}>Item 2</DropdownItem>
            <DropdownItem onClick={() => alert('Item 3')}>Item 3</DropdownItem>
          </Dropdown>
        </Card>

        {/* Modal */}
        <Card>
          <Heading level={2}>Modal</Heading>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
            <Heading level={3}>Modal Title</Heading>
            <Text>This is a modal content example.</Text>
            <Button onClick={() => setModalOpen(false)} className="mt-4">
              Close
            </Button>
          </Modal>
        </Card>
      </div>
    </div>
  );
}

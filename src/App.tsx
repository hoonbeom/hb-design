// import {
//   Button,
//   Input,
//   Select,
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   Badge,
//   Avatar,
//   Alert,
//   Spinner,
//   Heading,
//   Text,
//   Icon,
//   Tooltip,
//   Tabs,
//   TabList,
//   Tab,
//   TabPanels,
//   TabPanel,
//   Dropdown,
//   DropdownItem,
// } from './index';

function App() {
  // const selectOptions = [
  //   { value: 'option1', label: 'Option 1' },
  //   { value: 'option2', label: 'Option 2' },
  //   { value: 'option3', label: 'Option 3' },
  // ];

  return (
    <>A modern design system built with React, TypeScript, and Tailwind CSS</>
  );

  // return (
  //   <div className="min-h-screen bg-gray-50 p-8">
  //     <div className="mx-auto max-w-4xl space-y-8">
  //       <div className="text-center">
  //         <Heading level={1}>HB Design System</Heading>
  //         <Text variant="large" className="text-gray-600">
  //           A modern design system built with React, TypeScript, and Tailwind
  //           CSS
  //         </Text>
  //       </div>

  //       {/* Typography */}
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Typography</CardTitle>
  //           <CardDescription>Text and heading components</CardDescription>
  //         </CardHeader>
  //         <CardContent className="space-y-4">
  //           <Heading level={1}>Heading 1</Heading>
  //           <Heading level={2}>Heading 2</Heading>
  //           <Heading level={3}>Heading 3</Heading>
  //           <Text variant="large">Large text</Text>
  //           <Text variant="body">Body text</Text>
  //           <Text variant="caption">Caption text</Text>
  //         </CardContent>
  //       </Card>

  //       {/* Buttons */}
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Buttons</CardTitle>
  //           <CardDescription>
  //             Different button variants and sizes
  //           </CardDescription>
  //         </CardHeader>
  //         <CardContent className="space-y-4">
  //           <div className="flex flex-wrap gap-4">
  //             <Button variant="primary">Primary</Button>
  //             <Button variant="secondary">Secondary</Button>
  //             <Button variant="outline">Outline</Button>
  //             <Button variant="ghost">Ghost</Button>
  //             <Button variant="danger">Danger</Button>
  //           </div>
  //           <div className="flex flex-wrap gap-4">
  //             <Button size="sm">Small</Button>
  //             <Button size="md">Medium</Button>
  //             <Button size="lg">Large</Button>
  //           </div>
  //           <div className="flex flex-wrap gap-4">
  //             <Button loading>Loading</Button>
  //             <Button disabled>Disabled</Button>
  //           </div>
  //         </CardContent>
  //       </Card>

  //       {/* Inputs */}
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Inputs</CardTitle>
  //           <CardDescription>Form input components</CardDescription>
  //         </CardHeader>
  //         <CardContent className="space-y-4">
  //           <Input label="Email" placeholder="Enter your email" />
  //           <Input
  //             label="Password"
  //             type="password"
  //             error="Password is required"
  //           />
  //           <Input label="Username" helperText="Choose a unique username" />
  //           <Select
  //             label="Country"
  //             options={selectOptions}
  //             placeholder="Select a country"
  //           />
  //         </CardContent>
  //       </Card>

  //       {/* Badges */}
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Badges</CardTitle>
  //           <CardDescription>Status and label indicators</CardDescription>
  //         </CardHeader>
  //         <CardContent>
  //           <div className="flex flex-wrap gap-4">
  //             <Badge variant="default">Default</Badge>
  //             <Badge variant="primary">Primary</Badge>
  //             <Badge variant="success">Success</Badge>
  //             <Badge variant="warning">Warning</Badge>
  //             <Badge variant="danger">Danger</Badge>
  //           </div>
  //         </CardContent>
  //       </Card>

  //       {/* Avatars */}
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Avatars</CardTitle>
  //           <CardDescription>User profile images and initials</CardDescription>
  //         </CardHeader>
  //         <CardContent>
  //           <div className="flex flex-wrap items-center gap-4">
  //             <Avatar
  //               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  //               alt="User"
  //             />
  //             <Avatar alt="John Doe" />
  //             <Avatar size="lg" alt="User" />
  //             <Avatar size="xl" alt="User" />
  //           </div>
  //         </CardContent>
  //       </Card>

  //       {/* Icons */}
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Icons</CardTitle>
  //           <CardDescription>Icon components</CardDescription>
  //         </CardHeader>
  //         <CardContent>
  //           <div className="flex flex-wrap items-center gap-4">
  //             <Icon name="heart" size="sm">
  //               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  //             </Icon>
  //             <Icon name="star" size="md">
  //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  //             </Icon>
  //             <Icon name="check" size="lg">
  //               <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  //             </Icon>
  //           </div>
  //         </CardContent>
  //       </Card>

  //       {/* Tooltips */}
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Tooltips</CardTitle>
  //           <CardDescription>Hover tooltips</CardDescription>
  //         </CardHeader>
  //         <CardContent>
  //           <div className="flex flex-wrap gap-4">
  //             <Tooltip content="This is a tooltip">
  //               <Button variant="outline">Hover me</Button>
  //             </Tooltip>
  //             <Tooltip content="Tooltip on the right" position="right">
  //               <Button variant="outline">Right tooltip</Button>
  //             </Tooltip>
  //           </div>
  //         </CardContent>
  //       </Card>

  //       {/* Tabs */}
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Tabs</CardTitle>
  //           <CardDescription>Tab navigation</CardDescription>
  //         </CardHeader>
  //         <CardContent>
  //           <Tabs>
  //             <TabList>
  //               <Tab>Tab 1</Tab>
  //               <Tab>Tab 2</Tab>
  //               <Tab>Tab 3</Tab>
  //             </TabList>
  //             <TabPanels>
  //               <TabPanel>
  //                 <Text>Content for tab 1</Text>
  //               </TabPanel>
  //               <TabPanel>
  //                 <Text>Content for tab 2</Text>
  //               </TabPanel>
  //               <TabPanel>
  //                 <Text>Content for tab 3</Text>
  //               </TabPanel>
  //             </TabPanels>
  //           </Tabs>
  //         </CardContent>
  //       </Card>

  //       {/* Dropdown */}
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Dropdown</CardTitle>
  //           <CardDescription>Dropdown menus</CardDescription>
  //         </CardHeader>
  //         <CardContent>
  //           <Dropdown trigger={<Button variant="outline">Open Menu</Button>}>
  //             <DropdownItem onClick={() => console.log('Item 1')}>
  //               Item 1
  //             </DropdownItem>
  //             <DropdownItem onClick={() => console.log('Item 2')}>
  //               Item 2
  //             </DropdownItem>
  //             <DropdownItem onClick={() => console.log('Item 3')}>
  //               Item 3
  //             </DropdownItem>
  //           </Dropdown>
  //         </CardContent>
  //       </Card>

  //       {/* Alerts */}
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Alerts</CardTitle>
  //           <CardDescription>Notification and status messages</CardDescription>
  //         </CardHeader>
  //         <CardContent className="space-y-4">
  //           <Alert variant="info">This is an informational message</Alert>
  //           <Alert variant="success">Operation completed successfully</Alert>
  //           <Alert variant="warning">Please review your input</Alert>
  //           <Alert variant="error">An error occurred while processing</Alert>
  //         </CardContent>
  //       </Card>

  //       {/* Spinners */}
  //       <Card>
  //         <CardHeader>
  //           <CardTitle>Spinners</CardTitle>
  //           <CardDescription>Loading indicators</CardDescription>
  //         </CardHeader>
  //         <CardContent>
  //           <div className="flex flex-wrap items-center gap-4">
  //             <Spinner size="sm" />
  //             <Spinner size="md" />
  //             <Spinner size="lg" />
  //             <Spinner size="lg" color="white" />
  //           </div>
  //         </CardContent>
  //       </Card>
  //     </div>
  //   </div>
  // );
}

export default App;

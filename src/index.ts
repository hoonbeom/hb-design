/**
 * HB Design - A modern design system built with Tailwind CSS
 * 
 * @example
 * ```tsx
 * // Import utilities
 * import { cn } from 'hb-design';
 * 
 * // Import UI components
 * import { UI } from 'hb-design';
 * 
 * // Or import specific categories
 * import { display } from 'hb-design/ui/display';
 * import { input } from 'hb-design/ui/input';
 * import { feedback } from 'hb-design/ui/feedback';
 * import { navigation } from 'hb-design/ui/navigation';
 * ```
 */

// Utils
export { cn } from './lib/utils';

// Display Components
export { Avatar } from './ui/display/avatar';
export { Badge } from './ui/display/badge';
export { Card } from './ui/display/card';
export { Heading } from './ui/display/heading';
export { Icon } from './ui/display/icon';
export { Text } from './ui/display/text';

// Input Components
export { Button } from './ui/inputs/button';
export { Input } from './ui/inputs/input';
export { Select } from './ui/inputs/select';

// Feedback Components
export { Alert } from './ui/feedback/alert';
export { Modal } from './ui/feedback/modal';
export { Spinner } from './ui/feedback/spinner';
export { Tooltip } from './ui/feedback/tooltip';

// Navigation Components
export { Dropdown, DropdownItem } from './ui/navigation/dropdown';
export { Tabs, TabList, Tab, TabPanels, TabPanel } from './ui/navigation/tabs';

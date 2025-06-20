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

// UI Components
import * as display from './ui/display';
import * as input from './ui/input';
import * as feedback from './ui/feedback';
import * as navigation from './ui/navigation';

export const UI = {
  display,
  input,
  feedback,
  navigation,
} as const;

// Re-export for direct access
export { display, input, feedback, navigation };

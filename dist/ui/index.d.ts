
/**
 * UI Components
 *
 * @example
 * import { display } from 'hb-design/ui/display';
 * import { input } from 'hb-design/ui/input';
 * import { feedback } from 'hb-design/ui/feedback';
 * import { navigation } from 'hb-design/ui/navigation';
 */

// Re-export sub-modules for better IDE support
export * from './display';
export * from './input';
export * from './feedback';
export * from './navigation';

// Also export as namespaces for backward compatibility
export * as display from './display';
export * as input from './input';
export * as feedback from './feedback';
export * as navigation from './navigation';

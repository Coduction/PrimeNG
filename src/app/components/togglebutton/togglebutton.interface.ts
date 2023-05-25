import { ToggleButton } from './togglebutton';
/**
 * Custom change event.
 * @see {@link ToggleButton.onChange}
 */
export interface ToggleButtonChangeEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Boolean value to represent checked state.
     */
    checked: boolean | undefined;
}

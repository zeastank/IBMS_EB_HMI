declare function parseInt(s: string | undefined, radix: number): number;
declare namespace TcHmi.Controls.Beckhoff {
    class TcHmiTimespanPicker extends TcHmi.Controls.System.TcHmiControl {
        #private;
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        /** member variables */
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTemplateRoot: HTMLElement;
        /** Reference to the root dom element of the current control template as  jquery object. */
        protected __elementTSTemplate: JQuery;
        /** Reference to the first timespan block as jquery object. */
        protected __elementTSFirstBlockTemplate: JQuery;
        /** Reference to the second timespan block as jquery object. */
        protected __elementTSSecondBlockTemplate: JQuery;
        /** Reference to the button template dom element of the current control as  jquery object. */
        protected __elementButtonTemplate: HTMLElement;
        /**
         * Internal reference to the attribute "data-tchmi-value"
         */
        protected __value: string | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-direct-display"
         */
        protected __directDisplay: boolean | undefined;
        /**
         * Internal reference to the attribute "data-tchmi-show-confirmation-buttons"
         */
        protected __showConfirmationButtons: boolean | undefined;
        /** Event handlers */
        protected __mousedownHandler: (event: MouseEvent) => void;
        protected __focusoutHandler: (event: FocusEvent) => void;
        protected __keypressHandler: (event: KeyboardEvent) => void;
        private __onPressedOkDestroyEvent;
        private __onPressedCancelDestroyEvent;
        private __onUserInteractionFinishedYearDestroyEvent;
        private __onUserInteractionFinishedMonthDestroyEvent;
        private __onUserInteractionFinishedDayDestroyEvent;
        private __onUserInteractionFinishedHourDestroyEvent;
        private __onUserInteractionFinishedMinuteDestroyEvent;
        private __onUserInteractionFinishedSecondDestroyEvent;
        private __onUserInteractionFinishedMillisecondDestroyEvent;
        /** Stores the controls as System.TcHmiControl[] */
        protected __baseControls: Dictionary<System.TcHmiControl>;
        /**
         * If raised, the control object exists in control cache and constructor of each inheritation level was called.
         */
        __previnit(): void;
        /**
         * If raised, all attributes have been set to it's default or dom values.
         */
        __init(): void;
        /**
         * Is called by the system after the control instance gets part of the current DOM.
         * Is only allowed to be called from the framework itself!
         */
        __attach(): void;
        /**
         * Is called by the system after the control instance is no longer part of the current DOM.
         * Is only allowed to be called from the framework itself!
         */
        __detach(): void;
        /**
         * Destroy the current control instance.
         * Will be called automatically if system destroys control!
         */
        destroy(): void;
        /**
         * Created a documentFragment with controls (textbox, button, textbox and a second button).
         * @param name The name of the region.
         * @returns The documentFragment with controls.
         */
        private __addControls;
        /**
         * Convert milliseconds to iso 8601 string
         * @param milliSec - Milliseconds
         */
        protected __timespanObjectToIso(timespanObject: {
            years: number;
            months: number;
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
            milliseconds: number;
        }): string;
        /**
         * updates the value of the control if the control is directly displayed in the view and the confirmation buttons are hidden.
         */
        protected __updateValue(): void;
        /**
         * Convert iso 8601 string to milliseconds
         * @param t - Iso 8601 string
         */
        protected __isoToTimespanObject(t: string): {
            years: number;
            months: number;
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
            milliseconds: number;
        };
        /**
         * Returns an event handler for the mousedown event.
         */
        protected __onMousedown(): (event: MouseEvent) => void;
        /**
         * Is called if focusout event  has raised.
         */
        private __onFocusOut;
        /**
         * Is called if keypress event  has raised.
         */
        private __onKeyPress;
        /**
         * Open the timespanPicker (in TopMostLayer).
         */
        openTimespanPicker(): void;
        /**
         * Close the timespanPicker without changes (delete from TopMostLayer).
         */
        closeTimespanPicker(): void;
        /**
         * Return the currently configured timespan object.
         */
        protected __getTimespanObject(): {
            years: number;
            months: number;
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
            milliseconds: number;
        };
        /**
         * Is called if onPressed event of buttons has raised.
         */
        private __onPressed;
        /**
         * Is called if onUserInteractionFinished event of SpinboxInput has raised.
         */
        private __onUserInteractionFinished;
        /**
         * Sets the value of value
         * @param valueNew The new value for value
         */
        setValue(valueNew: string | null): void;
        protected __setValue(valueNew: string | null, process?: boolean): void;
        /**
         * Gets the value of value
         */
        getValue(): string;
        /**
         * Processes value
         */
        protected __processValue(): void;
        /**
         * Sets the value of DirectDisplay
         * @param valueNew The new value for DirectDisplay
         */
        setDirectDisplay(valueNew: boolean | null): void;
        /**
         * Gets the value of DirectDisplay
         */
        getDirectDisplay(): boolean | undefined;
        /**
         * Process the value of DirectDisplay
         */
        protected __processDirectDisplay(): void;
        /**
         * Sets the value of ShowConfirmationButtons
         * @param valueNew The new value for ShowConfirmationButtons
         */
        setShowConfirmationButtons(valueNew: boolean | null): void;
        /**
         * Gets the value of ShowConfirmationButtons
         */
        getShowConfirmationButtons(): boolean | undefined;
        /**
         * Process the value of ShowConfirmationButtons
         */
        protected __processShowConfirmationButtons(): void;
        /**
         * Processes the current enabled state.
         */
        __processIsEnabled(): void;
    }
}
//# sourceMappingURL=TcHmiTimespanPicker.d.ts.map
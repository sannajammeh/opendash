import * as _tw_classed_react from '@tw-classed/react';
import { ComponentProps, VariantProps } from '@tw-classed/react';
import * as react from 'react';
import { HTMLProps } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
export { SelectPrimitive };
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

declare const ButtonBase: _tw_classed_react.ClassedComponentType<"button", Partial<{
    color: "secondary" | "blue";
    variant: "text" | "flat" | "filled" | "ghost";
    size: "1" | "2" | "3" | 1 | 2 | 3;
    rounded: "1" | "2" | "3" | "none" | "4" | "5" | "full" | 1 | 2 | 3 | 4 | 5;
    space: "center" | "between" | "around" | "evenly" | "start" | "end";
    loading: boolean | "true" | "false";
}>, Pick<{
    base: string;
    variants: {
        color: {
            secondary: string;
            blue: string;
        };
        variant: {
            flat: string;
            filled: string;
            ghost: string;
            text: string;
        };
        size: {
            1: string;
            2: string;
            3: string;
        };
        rounded: {
            none: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            full: string;
        };
        space: {
            between: string;
            around: string;
            evenly: string;
            start: string;
            end: string;
            center: string;
        };
        loading: {
            true: string;
        };
    };
    compoundVariants: {
        variant: string;
        color: string;
        class: string;
    }[];
    defaultVariants: {
        color: "secondary";
        size: 1;
        rounded: "2";
        space: "center";
    };
}, "variants" | "defaultVariants">>;
interface ButtonProps extends ComponentProps<typeof ButtonBase> {
    icon?: React.ReactNode;
}
declare const Button: _tw_classed_react.DerivedComponentType<_tw_classed_react.ClassedComponentType<"button", Partial<{
    color: "secondary" | "blue";
    variant: "text" | "flat" | "filled" | "ghost";
    size: "1" | "2" | "3" | 1 | 2 | 3;
    rounded: "1" | "2" | "3" | "none" | "4" | "5" | "full" | 1 | 2 | 3 | 4 | 5;
    space: "center" | "between" | "around" | "evenly" | "start" | "end";
    loading: boolean | "true" | "false";
}>, Pick<{
    base: string;
    variants: {
        color: {
            secondary: string;
            blue: string;
        };
        variant: {
            flat: string;
            filled: string;
            ghost: string;
            text: string;
        };
        size: {
            1: string;
            2: string;
            3: string;
        };
        rounded: {
            none: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            full: string;
        };
        space: {
            between: string;
            around: string;
            evenly: string;
            start: string;
            end: string;
            center: string;
        };
        loading: {
            true: string;
        };
    };
    compoundVariants: {
        variant: string;
        color: string;
        class: string;
    }[];
    defaultVariants: {
        color: "secondary";
        size: 1;
        rounded: "2";
        space: "center";
    };
}, "variants" | "defaultVariants">>, Pick<ButtonProps, "form" | "slot" | "style" | "title" | "color" | "variant" | "size" | "rounded" | "space" | "loading" | "as" | "key" | "autoFocus" | "disabled" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "icon">, {}>;

declare const Text: _tw_classed_react.ClassedComponentType<"span", Partial<{
    size: "title" | "1" | "2" | "3" | "4" | "5" | 1 | 2 | 3 | 4 | 5 | "heading" | "6" | "7" | "8" | "9" | 6 | 7 | 8 | 9;
    color: "blue" | "slate" | "red";
    weight: "bold" | "light" | "normal" | "medium" | "semi-bold" | "black";
    block: boolean | "true" | "false";
    center: boolean | "true" | "false";
}>, Pick<{
    variants: {
        size: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            heading: string;
            title: string;
        };
        color: {
            slate: string;
            blue: string;
            red: string;
        };
        weight: {
            light: string;
            normal: string;
            medium: string;
            bold: string;
            "semi-bold": string;
            black: string;
        };
        block: {
            true: string;
        };
        center: {
            true: string;
        };
    };
    defaultVariants: {
        size: 3;
    };
}, "variants" | "defaultVariants">>;

declare const Flex: _tw_classed_react.ClassedComponentType<"div", Partial<{
    direction: "row" | "column";
    justify: "center" | "between" | "around" | "evenly" | "start" | "end";
    align: "center" | "start" | "end" | "baseline" | "stretch";
    wrap: "wrap" | "nowrap";
    variant: "horizontal" | "vertical";
    gap: 0 | "1" | "2" | "3" | "4" | "5" | "0" | 1 | 2 | 3 | 4 | 5 | "6" | "7" | "8" | "9" | 6 | 7 | 8 | 9 | "10" | 10;
}>, Pick<{
    variants: {
        direction: {
            row: string;
            column: string;
        };
        justify: {
            start: string;
            end: string;
            center: string;
            between: string;
            around: string;
            evenly: string;
        };
        align: {
            start: string;
            end: string;
            center: string;
            baseline: string;
            stretch: string;
        };
        wrap: {
            wrap: string;
            nowrap: string;
        };
        variant: {
            horizontal: string;
            vertical: string;
        };
        gap: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
        };
    };
}, "variants" | "defaultVariants">>;

interface SelectProps extends SelectPrimitive.SelectProps {
    className?: string;
    color?: keyof typeof colors;
}
declare const colors: {
    blue: string;
    violet: string;
};
declare const Select: {
    ({ children, className, color, ...props }: SelectProps): JSX.Element;
    Item: react.ForwardRefExoticComponent<SelectPrimitive.SelectItemProps & react.RefAttributes<HTMLDivElement>>;
    Separator: _tw_classed_react.ClassedComponentType<react.ForwardRefExoticComponent<SelectPrimitive.SelectSeparatorProps & react.RefAttributes<HTMLDivElement>>, {}, {}>;
    Group: react.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & react.RefAttributes<HTMLDivElement>>;
    Label: _tw_classed_react.ClassedComponentType<react.ForwardRefExoticComponent<SelectPrimitive.SelectLabelProps & react.RefAttributes<HTMLDivElement>>, {}, {}>;
    Button: _tw_classed_react.DerivedComponentType<_tw_classed_react.ClassedComponentType<"button", {}, {}>, Pick<Omit<Pick<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof react.ButtonHTMLAttributes<HTMLButtonElement>> & {
        ref?: ((instance: HTMLButtonElement | null) => void) | react.RefObject<HTMLButtonElement> | null | undefined;
    }, "as"> & {
        as?: "button" | undefined;
    }, "as" | "key" | keyof react.ButtonHTMLAttributes<HTMLButtonElement>>, {}>;
};

declare const _Card: _tw_classed_react.ClassedComponentType<"article", Partial<{
    color: "slate1" | "slate2";
    rounded: "none" | "sm" | "md" | "lg";
    bordered: boolean | "true" | "false";
}>, Pick<{
    variants: {
        color: {
            slate1: string;
            slate2: string;
        };
        rounded: {
            none: string;
            sm: string;
            md: string;
            lg: string;
        };
        bordered: {
            true: string;
        };
    };
    defaultVariants: {
        color: "slate1";
        rounded: "md";
    };
}, "variants" | "defaultVariants">>;
declare const CardHeader: _tw_classed_react.ClassedComponentType<"header", {}, {}>;
declare const CardBody: _tw_classed_react.ClassedComponentType<"div", Partial<{
    size: 0 | "small" | "0" | "medium" | "large";
}>, Pick<{
    variants: {
        size: {
            0: string;
            small: string;
            medium: string;
            large: string;
        };
    };
    defaultVariants: {
        size: "medium";
    };
}, "variants" | "defaultVariants">>;
declare const CardFooter: _tw_classed_react.ClassedComponentType<"footer", {}, {}>;
type CardComponentType = typeof _Card & {
    Header: typeof CardHeader;
    Body: typeof CardBody;
    Footer: typeof CardFooter;
};
declare const Card: CardComponentType;

declare const classed: _tw_classed_react.ClassedFunctionProxy;

declare const Spacer: _tw_classed_react.ClassedComponentType<"span", Partial<{
    size: "1" | "2" | "3" | "4" | "5" | 1 | 2 | 3 | 4 | 5 | "6" | "7" | "8" | "9" | 6 | 7 | 8 | 9 | "10" | 10;
}>, Pick<{
    variants: {
        size: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
        };
    };
    defaultVariants: {
        size: 4;
    };
}, "variants" | "defaultVariants">>;

declare const Input: _tw_classed_react.ClassedComponentType<"input", Partial<{
    size: "1" | "2" | "3" | 1 | 2 | 3;
    rounded: "1" | "2" | "3" | "4" | 1 | 2 | 3 | 4;
    color: "blue" | "slate" | "red";
    state: "error";
}>, Pick<{
    base: string;
    variants: {
        size: {
            1: string;
            2: string;
            3: string;
        };
        rounded: {
            1: string;
            2: string;
            3: string;
            4: string;
        };
        color: {
            slate: string;
            blue: string;
            red: string;
        };
        state: {
            error: string;
        };
    };
    defaultVariants: {
        size: 1;
        rounded: 1;
        color: "slate";
    };
}, "variants" | "defaultVariants">>;
declare const Label: _tw_classed_react.ClassedComponentType<"label", Partial<{
    direction: "row" | "column";
    justify: "center" | "between" | "around" | "evenly" | "start" | "end";
    align: "center" | "start" | "end" | "baseline" | "stretch";
    wrap: "wrap" | "nowrap";
    variant: "horizontal" | "vertical";
    gap: 0 | "1" | "2" | "3" | "4" | "5" | "0" | 1 | 2 | 3 | 4 | 5 | "6" | "7" | "8" | "9" | 6 | 7 | 8 | 9 | "10" | 10;
}> & Partial<{
    size: "title" | "1" | "2" | "3" | "4" | "5" | 1 | 2 | 3 | 4 | 5 | "heading" | "6" | "7" | "8" | "9" | 6 | 7 | 8 | 9;
    color: "blue" | "slate" | "red";
    weight: "bold" | "light" | "normal" | "medium" | "semi-bold" | "black";
    block: boolean | "true" | "false";
    center: boolean | "true" | "false";
}>, Pick<{
    variants: {
        direction: {
            row: string;
            column: string;
        };
        justify: {
            start: string;
            end: string;
            center: string;
            between: string;
            around: string;
            evenly: string;
        };
        align: {
            start: string;
            end: string;
            center: string;
            baseline: string;
            stretch: string;
        };
        wrap: {
            wrap: string;
            nowrap: string;
        };
        variant: {
            horizontal: string;
            vertical: string;
        };
        gap: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
        };
    };
}, "variants" | "defaultVariants"> & Pick<{
    variants: {
        size: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            heading: string;
            title: string;
        };
        color: {
            slate: string;
            blue: string;
            red: string;
        };
        weight: {
            light: string;
            normal: string;
            medium: string;
            bold: string;
            "semi-bold": string;
            black: string;
        };
        block: {
            true: string;
        };
        center: {
            true: string;
        };
    };
    defaultVariants: {
        size: 3;
    };
}, "variants" | "defaultVariants">>;
type TextFieldProps = HTMLProps<HTMLInputElement> & Omit<VariantProps<typeof Label>, "color" | "size"> & VariantProps<typeof Input> & {
    label?: string;
    error?: string;
};
declare const TextField: react.ForwardRefExoticComponent<Pick<Omit<TextFieldProps, "as">, "center" | "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "color" | "variant" | "size" | "rounded" | "start" | "key" | "autoFocus" | "disabled" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "name" | "type" | "value" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "height" | "max" | "media" | "method" | "min" | "target" | "width" | "crossOrigin" | "direction" | "href" | "classID" | "useMap" | "wmode" | "download" | "hrefLang" | "rel" | "alt" | "coords" | "shape" | "autoPlay" | "controls" | "loop" | "mediaGroup" | "muted" | "playsInline" | "preload" | "src" | "dateTime" | "open" | "acceptCharset" | "action" | "autoComplete" | "encType" | "noValidate" | "manifest" | "allowFullScreen" | "allowTransparency" | "frameBorder" | "marginHeight" | "marginWidth" | "sandbox" | "scrolling" | "seamless" | "srcDoc" | "sizes" | "srcSet" | "accept" | "capture" | "checked" | "list" | "maxLength" | "minLength" | "multiple" | "readOnly" | "required" | "step" | "challenge" | "keyType" | "keyParams" | "htmlFor" | "integrity" | "charSet" | "content" | "httpEquiv" | "high" | "low" | "optimum" | "reversed" | "selected" | "async" | "defer" | "scoped" | "align" | "cellPadding" | "cellSpacing" | "colSpan" | "headers" | "rowSpan" | "scope" | "cols" | "rows" | "wrap" | "default" | "kind" | "srcLang" | "poster" | "justify" | "weight" | "block" | "gap" | "state" | "error"> & react.RefAttributes<HTMLInputElement>>;

declare const Separator: _tw_classed_react.ClassedComponentType<"hr", Partial<{
    color: "blue" | "slate";
    size: 0 | "1" | "2" | "3" | "4" | "0" | 1 | 2 | 3 | 4;
}>, Pick<{
    variants: {
        color: {
            slate: string;
            blue: string;
        };
        size: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
        };
    };
    defaultVariants: {
        color: "slate";
    };
}, "variants" | "defaultVariants">>;

declare const CollapsibleRoot: react.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleProps & react.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: _tw_classed_react.ClassedComponentType<react.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleTriggerProps & react.RefAttributes<HTMLButtonElement>>, Partial<{
    color: "secondary" | "blue";
    variant: "text" | "flat" | "filled" | "ghost";
    size: "1" | "2" | "3" | 1 | 2 | 3;
    rounded: "1" | "2" | "3" | "none" | "4" | "5" | "full" | 1 | 2 | 3 | 4 | 5;
    space: "center" | "between" | "around" | "evenly" | "start" | "end";
    loading: boolean | "true" | "false";
}> & Partial<{
    open: boolean | "true" | "false";
}>, Pick<{
    base: string;
    variants: {
        color: {
            secondary: string;
            blue: string;
        };
        variant: {
            flat: string;
            filled: string;
            ghost: string;
            text: string;
        };
        size: {
            1: string;
            2: string;
            3: string;
        };
        rounded: {
            none: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            full: string;
        };
        space: {
            between: string;
            around: string;
            evenly: string;
            start: string;
            end: string;
            center: string;
        };
        loading: {
            true: string;
        };
    };
    compoundVariants: {
        variant: string;
        color: string;
        class: string;
    }[];
    defaultVariants: {
        color: "secondary";
        size: 1;
        rounded: "2";
        space: "center";
    };
}, "variants" | "defaultVariants"> & Pick<{
    variants: {
        open: {
            true: string;
        };
    };
    defaultVariants: any;
}, "variants" | "defaultVariants">>;
declare const CollapsibleIndicator: _tw_classed_react.ClassedComponentType<"span", {}, {}>;
declare const CollapsibleContent: react.ForwardRefExoticComponent<CollapsiblePrimitive.CollapsibleContentProps & react.RefAttributes<HTMLDivElement>>;

declare const IconButton: _tw_classed_react.ClassedComponentType<"button", Partial<{
    color: "secondary" | "blue";
    variant: "text" | "flat" | "filled" | "ghost";
    size: "1" | "2" | "3" | 1 | 2 | 3;
    rounded: "1" | "2" | "3" | "none" | "4" | "5" | "full" | 1 | 2 | 3 | 4 | 5;
}>, Pick<{
    base: string;
    variants: {
        color: {
            secondary: string;
            blue: string;
        };
        variant: {
            flat: string;
            filled: string;
            ghost: string;
            text: string;
        };
        size: {
            1: string;
            2: string;
            3: string;
        };
        rounded: {
            none: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            full: string;
        };
    };
    compoundVariants: {
        variant: string;
        color: string;
        class: string;
    }[];
    defaultVariants: {
        color: "secondary";
        size: 1;
        variant: "flat";
        rounded: "3";
    };
}, "variants" | "defaultVariants">>;

declare const AppBar: _tw_classed_react.ClassedComponentType<"header", Partial<{
    size: "sm" | "md" | "lg";
}>, Pick<{
    variants: {
        size: {
            sm: string;
            md: string;
            lg: string;
        };
    };
    defaultVariants: {
        size: "md";
    };
}, "variants" | "defaultVariants">>;

declare const DropdownMenuContent: react.ForwardRefExoticComponent<Pick<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & react.RefAttributes<HTMLDivElement>, "as"> & {
    as?: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuContentProps & react.RefAttributes<HTMLDivElement>> | undefined;
}, "slot" | "style" | "title" | "color" | "as" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "loop" | "align" | "asChild" | "side" | "sideOffset" | "alignOffset" | "arrowPadding" | "collisionBoundary" | "collisionPadding" | "sticky" | "hideWhenDetached" | "avoidCollisions" | "onCloseAutoFocus" | "onEscapeKeyDown" | "onPointerDownOutside" | "onFocusOutside" | "onInteractOutside" | "forceMount"> & react.RefAttributes<HTMLDivElement>>;
declare const DropdownMenu: react.FC<DropdownMenuPrimitive.DropdownMenuProps> & {
    Trigger: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & react.RefAttributes<HTMLButtonElement>>;
    Content: react.ForwardRefExoticComponent<Pick<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & react.RefAttributes<HTMLDivElement>, "as"> & {
        as?: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuContentProps & react.RefAttributes<HTMLDivElement>> | undefined;
    }, "slot" | "style" | "title" | "color" | "as" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "children" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "loop" | "align" | "asChild" | "side" | "sideOffset" | "alignOffset" | "arrowPadding" | "collisionBoundary" | "collisionPadding" | "sticky" | "hideWhenDetached" | "avoidCollisions" | "onCloseAutoFocus" | "onEscapeKeyDown" | "onPointerDownOutside" | "onFocusOutside" | "onInteractOutside" | "forceMount"> & react.RefAttributes<HTMLDivElement>>;
    Group: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & react.RefAttributes<HTMLDivElement>>;
    RadioGroup: react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & react.RefAttributes<HTMLDivElement>>;
    Item: _tw_classed_react.ClassedComponentType<react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuItemProps & react.RefAttributes<HTMLDivElement>>, {}, {}>;
    CheckboxItem: _tw_classed_react.ClassedComponentType<react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & react.RefAttributes<HTMLDivElement>>, {}, {}>;
    RadioItem: _tw_classed_react.ClassedComponentType<react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioItemProps & react.RefAttributes<HTMLDivElement>>, {}, {}>;
    Sub: react.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
    SubTrigger: _tw_classed_react.ClassedComponentType<react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & react.RefAttributes<HTMLButtonElement>>, {}, {}>;
    SubContent: _tw_classed_react.ClassedComponentType<react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuSubContentProps & react.RefAttributes<HTMLDivElement>>, {}, {}>;
    Label: _tw_classed_react.ClassedComponentType<react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuLabelProps & react.RefAttributes<HTMLDivElement>>, {}, {}>;
    Separator: _tw_classed_react.ClassedComponentType<react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuSeparatorProps & react.RefAttributes<HTMLDivElement>>, {}, {}>;
    ItemIndicator: _tw_classed_react.ClassedComponentType<react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuItemIndicatorProps & react.RefAttributes<HTMLSpanElement>>, {}, {}>;
    Arrow: _tw_classed_react.ClassedComponentType<react.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuArrowProps & react.RefAttributes<SVGSVGElement>>, {}, {}>;
};

declare const Skeleton: _tw_classed_react.ClassedComponentType<"div", Partial<{
    rounded: "none" | "sm" | "md" | "lg";
}>, Pick<{
    variants: {
        rounded: {
            none: string;
            sm: string;
            md: string;
            lg: string;
        };
    };
    defaultVariants: {
        rounded: "md";
    };
}, "variants" | "defaultVariants">>;

export { AppBar, Button, ButtonBase, ButtonProps, Card, CollapsibleContent, CollapsibleIndicator, CollapsibleRoot, CollapsibleTrigger, DropdownMenu, DropdownMenuContent, Flex, IconButton, Input, Label, Select, Separator, Skeleton, Spacer, Text, TextField, TextFieldProps, classed };

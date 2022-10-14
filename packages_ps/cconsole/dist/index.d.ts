export declare const cconsoleInit: (options?: {
    logToCloud?: Record<string, Function>;
    disabled?: boolean;
    useTrace?: boolean;
    useColor?: boolean;
    separateTypes?: boolean;
}) => {
    updateOptions: (newOptions?: {
        logToCloud?: Record<string, Function>;
        disabled?: boolean;
        useTrace?: boolean;
        useColor?: boolean;
        separateTypes?: boolean;
    }) => void;
    disable: () => void;
    enable: () => void;
    log: (message: string, ...args: any[]) => void;
    info: (message: string, ...args: any[]) => void;
    debug: (message: string, ...args: any[]) => void;
    warn: (message: string, ...args: any[]) => void;
    error_message: (message: string, ...args: any[]) => void;
    error: (message: string, ...args: any[]) => void;
    trace: (message: string, ...args: any[]) => void;
    success: (message: string, ...args: any[]) => void;
    subtle: (message: string, ...args: any[]) => void;
    clear: () => void;
    time: (label: string) => void;
    table: (tabularData: any, properties?: string[]) => void;
    timeEnd: (label: string) => void;
    timeLog: (label: string, ...data: any[]) => void;
    assert: (condition?: boolean, message?: string, ...data: any[]) => void;
    count: (label?: string) => void;
    countReset: (label?: string) => void;
    dir: (item: any, options?: any) => void;
    dirxml: (value: any) => void;
    group: (label?: string, ...data: any[]) => void;
    groupCollapsed: (label?: string, ...data: any[]) => void;
    groupEnd: () => void;
    profile?: (label?: string) => void;
    profileEnd?: (label?: string) => void;
    timeStamp?: (label?: string) => void;
};
declare const _default: {
    updateOptions: (newOptions?: {
        logToCloud?: Record<string, Function>;
        disabled?: boolean;
        useTrace?: boolean;
        useColor?: boolean;
        separateTypes?: boolean;
    }) => void;
    disable: () => void;
    enable: () => void;
    log: (message: string, ...args: any[]) => void;
    info: (message: string, ...args: any[]) => void;
    debug: (message: string, ...args: any[]) => void;
    warn: (message: string, ...args: any[]) => void;
    error_message: (message: string, ...args: any[]) => void;
    error: (message: string, ...args: any[]) => void;
    trace: (message: string, ...args: any[]) => void;
    success: (message: string, ...args: any[]) => void;
    subtle: (message: string, ...args: any[]) => void;
    clear: () => void;
    time: (label: string) => void;
    table: (tabularData: any, properties?: string[]) => void;
    timeEnd: (label: string) => void;
    timeLog: (label: string, ...data: any[]) => void;
    assert: (condition?: boolean, message?: string, ...data: any[]) => void;
    count: (label?: string) => void;
    countReset: (label?: string) => void;
    dir: (item: any, options?: any) => void;
    dirxml: (value: any) => void;
    group: (label?: string, ...data: any[]) => void;
    groupCollapsed: (label?: string, ...data: any[]) => void;
    groupEnd: () => void;
    profile?: (label?: string) => void;
    profileEnd?: (label?: string) => void;
    timeStamp?: (label?: string) => void;
};
export default _default;

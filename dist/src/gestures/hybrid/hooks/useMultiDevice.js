"use strict";
/**
 * useMultiDevice - useMultiDevice hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMultiDevice = useMultiDevice;
const react_1 = require("react");
function useMultiDevice(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useMultiDevice logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useMultiDevice.js.map
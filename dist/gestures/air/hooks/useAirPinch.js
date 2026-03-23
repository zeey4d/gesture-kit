"use strict";
/**
 * useAirPinch - useAirPinch hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAirPinch = useAirPinch;
const react_1 = require("react");
function useAirPinch(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useAirPinch logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useAirPinch.js.map
"use strict";
/**
 * usePinch - usePinch hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePinch = usePinch;
const react_1 = require("react");
function usePinch(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement usePinch logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=usePinch.js.map
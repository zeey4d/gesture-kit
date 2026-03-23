"use strict";
/**
 * usePan - usePan hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePan = usePan;
const react_1 = require("react");
function usePan(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement usePan logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=usePan.js.map
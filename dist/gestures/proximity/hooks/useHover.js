"use strict";
/**
 * useHover - useHover hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHover = useHover;
const react_1 = require("react");
function useHover(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useHover logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useHover.js.map
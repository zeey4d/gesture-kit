"use strict";
/**
 * useSwipeLeft - useSwipeLeft hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwipeLeft = useSwipeLeft;
const react_1 = require("react");
function useSwipeLeft(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useSwipeLeft logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useSwipeLeft.js.map
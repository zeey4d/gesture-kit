"use strict";
/**
 * useSwipeDown - useSwipeDown hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwipeDown = useSwipeDown;
const react_1 = require("react");
function useSwipeDown(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useSwipeDown logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useSwipeDown.js.map
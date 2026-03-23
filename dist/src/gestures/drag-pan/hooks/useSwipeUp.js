"use strict";
/**
 * useSwipeUp - useSwipeUp hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwipeUp = useSwipeUp;
const react_1 = require("react");
function useSwipeUp(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useSwipeUp logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useSwipeUp.js.map
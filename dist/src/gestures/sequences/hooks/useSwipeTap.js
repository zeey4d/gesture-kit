"use strict";
/**
 * useSwipeTap - useSwipeTap hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSwipeTap = useSwipeTap;
const react_1 = require("react");
function useSwipeTap(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useSwipeTap logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useSwipeTap.js.map
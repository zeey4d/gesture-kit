"use strict";
/**
 * useMultiHand - useMultiHand hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMultiHand = useMultiHand;
const react_1 = require("react");
function useMultiHand(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useMultiHand logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useMultiHand.js.map
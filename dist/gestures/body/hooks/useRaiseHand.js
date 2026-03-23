"use strict";
/**
 * useRaiseHand - useRaiseHand hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRaiseHand = useRaiseHand;
const react_1 = require("react");
function useRaiseHand(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useRaiseHand logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useRaiseHand.js.map
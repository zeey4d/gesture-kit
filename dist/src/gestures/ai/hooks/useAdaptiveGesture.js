"use strict";
/**
 * useAdaptiveGesture - useAdaptiveGesture hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAdaptiveGesture = useAdaptiveGesture;
const react_1 = require("react");
function useAdaptiveGesture(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useAdaptiveGesture logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useAdaptiveGesture.js.map
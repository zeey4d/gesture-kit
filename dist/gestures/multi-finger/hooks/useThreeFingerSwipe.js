"use strict";
/**
 * useThreeFingerSwipe - useThreeFingerSwipe hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThreeFingerSwipe = useThreeFingerSwipe;
const react_1 = require("react");
function useThreeFingerSwipe(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useThreeFingerSwipe logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useThreeFingerSwipe.js.map
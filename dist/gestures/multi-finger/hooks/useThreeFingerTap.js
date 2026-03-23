"use strict";
/**
 * useThreeFingerTap - useThreeFingerTap hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThreeFingerTap = useThreeFingerTap;
const react_1 = require("react");
function useThreeFingerTap(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useThreeFingerTap logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useThreeFingerTap.js.map
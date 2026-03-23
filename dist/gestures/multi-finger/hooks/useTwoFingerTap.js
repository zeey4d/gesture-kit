"use strict";
/**
 * useTwoFingerTap - useTwoFingerTap hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTwoFingerTap = useTwoFingerTap;
const react_1 = require("react");
function useTwoFingerTap(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useTwoFingerTap logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useTwoFingerTap.js.map
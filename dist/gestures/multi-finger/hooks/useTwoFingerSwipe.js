"use strict";
/**
 * useTwoFingerSwipe - useTwoFingerSwipe hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTwoFingerSwipe = useTwoFingerSwipe;
const react_1 = require("react");
function useTwoFingerSwipe(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useTwoFingerSwipe logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useTwoFingerSwipe.js.map
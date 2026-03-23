"use strict";
/**
 * useTiltRight - useTiltRight hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTiltRight = useTiltRight;
const react_1 = require("react");
function useTiltRight(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useTiltRight logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useTiltRight.js.map
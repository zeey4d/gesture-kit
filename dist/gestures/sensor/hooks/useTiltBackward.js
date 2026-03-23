"use strict";
/**
 * useTiltBackward - useTiltBackward hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTiltBackward = useTiltBackward;
const react_1 = require("react");
function useTiltBackward(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useTiltBackward logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useTiltBackward.js.map
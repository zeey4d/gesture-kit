"use strict";
/**
 * useHandNear - useHandNear hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHandNear = useHandNear;
const react_1 = require("react");
function useHandNear(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useHandNear logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useHandNear.js.map
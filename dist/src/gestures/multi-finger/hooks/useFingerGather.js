"use strict";
/**
 * useFingerGather - useFingerGather hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFingerGather = useFingerGather;
const react_1 = require("react");
function useFingerGather(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useFingerGather logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useFingerGather.js.map
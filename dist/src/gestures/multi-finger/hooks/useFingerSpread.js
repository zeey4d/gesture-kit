"use strict";
/**
 * useFingerSpread - useFingerSpread hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFingerSpread = useFingerSpread;
const react_1 = require("react");
function useFingerSpread(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useFingerSpread logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useFingerSpread.js.map
"use strict";
/**
 * useShake - useShake hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useShake = useShake;
const react_1 = require("react");
function useShake(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useShake logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useShake.js.map
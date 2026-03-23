"use strict";
/**
 * useProximityTap - useProximityTap hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProximityTap = useProximityTap;
const react_1 = require("react");
function useProximityTap(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useProximityTap logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useProximityTap.js.map
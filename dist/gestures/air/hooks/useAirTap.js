"use strict";
/**
 * useAirTap - useAirTap hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAirTap = useAirTap;
const react_1 = require("react");
function useAirTap(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useAirTap logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useAirTap.js.map
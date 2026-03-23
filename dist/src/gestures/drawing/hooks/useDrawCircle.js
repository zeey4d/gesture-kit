"use strict";
/**
 * useDrawCircle - useDrawCircle hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDrawCircle = useDrawCircle;
const react_1 = require("react");
function useDrawCircle(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useDrawCircle logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useDrawCircle.js.map
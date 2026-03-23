"use strict";
/**
 * useClap - useClap hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClap = useClap;
const react_1 = require("react");
function useClap(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useClap logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useClap.js.map
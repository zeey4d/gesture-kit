"use strict";
/**
 * useCompress - useCompress hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCompress = useCompress;
const react_1 = require("react");
function useCompress(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useCompress logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useCompress.js.map
"use strict";
/**
 * useEdgeSwipe - useEdgeSwipe hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEdgeSwipe = useEdgeSwipe;
const react_1 = require("react");
function useEdgeSwipe(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useEdgeSwipe logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useEdgeSwipe.js.map
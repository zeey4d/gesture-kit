"use strict";
/**
 * useDrawStar - useDrawStar hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDrawStar = useDrawStar;
const react_1 = require("react");
function useDrawStar(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useDrawStar logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useDrawStar.js.map
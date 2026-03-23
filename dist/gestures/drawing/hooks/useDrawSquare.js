"use strict";
/**
 * useDrawSquare - useDrawSquare hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDrawSquare = useDrawSquare;
const react_1 = require("react");
function useDrawSquare(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useDrawSquare logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useDrawSquare.js.map
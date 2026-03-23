"use strict";
/**
 * useDrag - useDrag hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDrag = useDrag;
const react_1 = require("react");
function useDrag(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useDrag logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useDrag.js.map
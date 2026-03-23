"use strict";
/**
 * useFlip - useFlip hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFlip = useFlip;
const react_1 = require("react");
function useFlip(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useFlip logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useFlip.js.map
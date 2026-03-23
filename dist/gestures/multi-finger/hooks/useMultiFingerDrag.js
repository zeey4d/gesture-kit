"use strict";
/**
 * useMultiFingerDrag - useMultiFingerDrag hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMultiFingerDrag = useMultiFingerDrag;
const react_1 = require("react");
function useMultiFingerDrag(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useMultiFingerDrag logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useMultiFingerDrag.js.map
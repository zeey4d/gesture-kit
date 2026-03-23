"use strict";
/**
 * usePinchRotate - usePinchRotate hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePinchRotate = usePinchRotate;
const react_1 = require("react");
function usePinchRotate(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement usePinchRotate logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=usePinchRotate.js.map
"use strict";
/**
 * useDragAndDrop - useDragAndDrop hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDragAndDrop = useDragAndDrop;
const react_1 = require("react");
function useDragAndDrop(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useDragAndDrop logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useDragAndDrop.js.map
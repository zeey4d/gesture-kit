"use strict";
/**
 * useDrawLine - useDrawLine hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDrawLine = useDrawLine;
const react_1 = require("react");
function useDrawLine(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useDrawLine logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useDrawLine.js.map
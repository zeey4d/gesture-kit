"use strict";
/**
 * useTapHold - useTapHold hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTapHold = useTapHold;
const react_1 = require("react");
function useTapHold(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useTapHold logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useTapHold.js.map
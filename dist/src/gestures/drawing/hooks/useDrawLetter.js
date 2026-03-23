"use strict";
/**
 * useDrawLetter - useDrawLetter hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDrawLetter = useDrawLetter;
const react_1 = require("react");
function useDrawLetter(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useDrawLetter logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useDrawLetter.js.map
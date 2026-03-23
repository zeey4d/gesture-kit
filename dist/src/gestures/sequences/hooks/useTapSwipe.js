"use strict";
/**
 * useTapSwipe - useTapSwipe hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTapSwipe = useTapSwipe;
const react_1 = require("react");
function useTapSwipe(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useTapSwipe logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useTapSwipe.js.map
"use strict";
/**
 * useAirDraw - useAirDraw hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAirDraw = useAirDraw;
const react_1 = require("react");
function useAirDraw(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useAirDraw logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useAirDraw.js.map
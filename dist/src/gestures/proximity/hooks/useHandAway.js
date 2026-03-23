"use strict";
/**
 * useHandAway - useHandAway hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHandAway = useHandAway;
const react_1 = require("react");
function useHandAway(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useHandAway logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useHandAway.js.map
"use strict";
/**
 * useMultiStep - useMultiStep hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMultiStep = useMultiStep;
const react_1 = require("react");
function useMultiStep(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useMultiStep logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useMultiStep.js.map
"use strict";
/**
 * useStep - useStep hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStep = useStep;
const react_1 = require("react");
function useStep(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useStep logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useStep.js.map
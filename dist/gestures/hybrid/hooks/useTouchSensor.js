"use strict";
/**
 * useTouchSensor - useTouchSensor hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTouchSensor = useTouchSensor;
const react_1 = require("react");
function useTouchSensor(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useTouchSensor logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useTouchSensor.js.map
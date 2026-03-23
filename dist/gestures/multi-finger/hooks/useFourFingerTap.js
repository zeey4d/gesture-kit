"use strict";
/**
 * useFourFingerTap - useFourFingerTap hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFourFingerTap = useFourFingerTap;
const react_1 = require("react");
function useFourFingerTap(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useFourFingerTap logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useFourFingerTap.js.map
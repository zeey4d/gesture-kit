"use strict";
/**
 * useStylusTap - useStylusTap hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStylusTap = useStylusTap;
const react_1 = require("react");
function useStylusTap(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useStylusTap logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useStylusTap.js.map
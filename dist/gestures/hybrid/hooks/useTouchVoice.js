"use strict";
/**
 * useTouchVoice - useTouchVoice hook
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTouchVoice = useTouchVoice;
const react_1 = require("react");
function useTouchVoice(options = {}) {
    const { enabled = true } = options;
    return (0, react_1.useMemo)(() => {
        // TODO: Implement useTouchVoice logic
        return { enabled };
    }, [enabled]);
}
//# sourceMappingURL=useTouchVoice.js.map
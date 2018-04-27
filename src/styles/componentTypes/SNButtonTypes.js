import {COLORS} from "../colors.js";

export const SNButtonTypes = {
    base: {
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            backgroundColor: COLORS.accent,
            paddingVertical: 8,
            paddingHorizontal: 12,
            overflow: 'hidden',
            width: 128,
            height: 44,
        },
        content: {
            fontSize: 14,
            alignSelf: 'center',
            textAlign: 'center',
        }
    },
    yellow: {
        container: {
            backgroundColor: COLORS.yellow
        },
        content: {}
    }
};
import {Dimensions} from 'react-native'
const { height, width} = Dimensions.get("window");
const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large:20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width

};
const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
};
export { SIZES, SHADOWS };

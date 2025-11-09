import * as stylex from '@stylexjs/stylex'
import { fontSizes, fontWeights, fonts, lineHeights } from './theme.stylex'

// Text style utilities
export const textStyles = {
  body: {
    large: {
      regular: stylex.create({
        default: {
          fontFamily: fonts.inter,
          fontSize: fontSizes.large,
          fontWeight: fontWeights.regular,
          lineHeight: lineHeights['145'],
        },
      }),
      semibold: stylex.create({
        default: {
          fontFamily: fonts.inter,
          fontSize: fontSizes.large,
          fontWeight: fontWeights.semibold,
          lineHeight: lineHeights['145'],
        },
      }),
    },
    medium: {
      regular: stylex.create({
        default: {
          fontFamily: fonts.inter,
          fontSize: fontSizes.medium,
          fontWeight: fontWeights.regular,
          lineHeight: lineHeights['145'],
        },
      }),
      semibold: stylex.create({
        default: {
          fontFamily: fonts.inter,
          fontSize: fontSizes.medium,
          fontWeight: fontWeights.semibold,
          lineHeight: lineHeights['145'],
        },
      }),
    },
    small: {
      regular: stylex.create({
        default: {
          fontFamily: fonts.inter,
          fontSize: fontSizes.small,
          fontWeight: fontWeights.regular,
          lineHeight: lineHeights['145'],
        },
      }),
      semibold: stylex.create({
        default: {
          fontFamily: fonts.inter,
          fontSize: fontSizes.small,
          fontWeight: fontWeights.semibold,
          lineHeight: lineHeights['145'],
        },
      }),
    },
  },

  button: {
    small: stylex.create({
      default: {
        fontFamily: fonts.inter,
        fontSize: fontSizes.xsmall,
        fontWeight: fontWeights.medium,
        lineHeight: lineHeights['100'],
      },
    }),
    standard: stylex.create({
      default: {
        fontFamily: fonts.inter,
        fontSize: fontSizes.small,
        fontWeight: fontWeights.medium,
        lineHeight: lineHeights['100'],
      },
    }),
  },

  heading: {
    xsmall: stylex.create({
      default: {
        fontFamily: fonts.national,
        fontSize: fontSizes['2xlarge'],
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights['145'],
      },
    }),
    small: stylex.create({
      default: {
        fontFamily: fonts.national,
        fontSize: fontSizes['3xlarge'],
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights['115'],
      },
    }),
    medium: stylex.create({
      default: {
        fontFamily: fonts.national,
        fontSize: fontSizes['3xlarge'],
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights['115'],
      },
    }),
    large: stylex.create({
      default: {
        fontFamily: fonts.national,
        fontSize: fontSizes['5xlarge'],
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights['105'],
      },
    }),
    xlarge: stylex.create({
      default: {
        fontFamily: fonts.national,
        fontSize: fontSizes['7xlarge'],
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights['105'],
      },
    }),
    '2xlarge': stylex.create({
      default: {
        fontFamily: fonts.national,
        fontSize: fontSizes['7xlarge'],
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights['105'],
      },
    }),
    '3xlarge': stylex.create({
      default: {
        fontFamily: fonts.national,
        fontSize: fontSizes['7xlarge'],
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights['105'],
      },
    }),
    '4xlarge': stylex.create({
      default: {
        fontFamily: fonts.national,
        fontSize: fontSizes['8xlarge'],
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights['95'],
      },
    }),
  },
}

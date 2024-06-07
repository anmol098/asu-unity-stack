// @ts-check

// @ts-check

/**
 * @typedef {object} Logo
 * @property {string} alt
 * @property {string} title
 * @property {string} src
 * @property {string} mobileSrc
 * @property {string} brandLink
 */

/**
 * @typedef {object} Button
 * @property {string} href
 * @property {("gold"|"maroon"|"light"|"dark")} [color]
 * @property {string} text
 * @property {string} [classes]
 * @property {function} [onClick]
 * @property {function} [onFocus]
 */

/**
 * @typedef {object} NavTreeProps
 * @property {number} id
 * @property {string} [href]
 * @property {string} [text]
 * @property {string} [type]
 * @property {boolean} [selected]
 * @property {object[]} [items]
 * @property {function} [renderContent]
 * @property {boolean} [isMega]
 * @property {Button[]} [buttons]
 * @property {string} [class]
 * @property {function} [onClick]
 */


/**
 * @typedef {object} UniversalNavBarProps
 * @property {function} [renderStart]
 */

/**
 * @typedef {object} HeaderProps
 * @property {boolean} isPartner
 * @property {NavTreeProps[]} navTree
 * @property {string} [title]
 * @property {string} [baseUrl]
 * @property {string} [parentOrg]
 * @property {string} [parentOrgUrl]
 * @property {Logo} partnerLogo
 * @property {Logo} logo
 * @property {Logo} sponsorLogo
 * @property {boolean} loggedIn
 * @property {string} userName
 * @property {string} loginLink
 * @property {function} [onLoginClick]
 * @property {string} logoutLink
 * @property {function} [onLogoutClick]
 * @property {Button[]} buttons
 * @property {("Lg"|"Xl")} breakpoint
 * @property {boolean} animateTitle
 * @property {boolean} expandOnHover
 * @property {NavTreeProps[]} mobileNavTree
 * @property {string} searchUrl
 * @property {string} site
 * @property {string} renderDiv - Can be either "true" or "false".
 * @property {UniversalNavBarProps} [universalNavbar]
 */

export const JSDOC = "jsdoc";

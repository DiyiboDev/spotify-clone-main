
/**
 * Selects the first element matching the given selector within the specified context. 
 * @param {String} selector selector
 * @param {Document|HTMLElement} context context
 * @returns {Element|null} element
 */
export const $ =  ( selector, context = document ) => context.querySelector( selector )

/**
 * Selects all elements matching the given selector within the specified context.
 * @param {String} selector selector
 * @param {Document|HTMLElement} context context
 * @returns {NodeListOf<Element>} elements
 */
export const $$ = ( selector, context = document ) => context.querySelectorAll( selector )

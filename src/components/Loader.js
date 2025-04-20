import { CLASSES } from "../utils/contants"
import { $ } from "../utils/dom"

/**
 * Hides the loader element by adding a 'hidden' class.
 * 
 * @param {Document|HTMLElement} context - The context in which to find the loader element. 
 * Defaults to the whole document if not provided.
 */

export const HideLoader = ( context = document ) => {
  $('.loader', context)?.classList.add(CLASSES.HIDDEN)
}
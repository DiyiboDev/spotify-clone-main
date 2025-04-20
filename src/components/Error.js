
/**
 * Creates an error message element.
 * @param {string} message - The message to be displayed in the error element.
 * @returns {HTMLDivElement} - An HTML div element containing the error message.
 */
export const Error = ( message ) => {
  const $error = document.createElement('div')
  $error.classList.add('error')
  $error.textContent = message

  return $error
}
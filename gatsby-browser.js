/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import ModeProvider from "context/ModeProvider"

//naming of this component is really imp
export const wrapRootElement = ({ element }) => (
  <ModeProvider>{element}</ModeProvider>
)

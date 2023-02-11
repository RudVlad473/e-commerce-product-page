function getVarFromCSS(varName: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(varName)
}

export { getVarFromCSS }

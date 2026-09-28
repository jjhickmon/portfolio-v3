import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    console.log("A", a, "B", b)
    const order = [
      "Publications",
      "Teaching",
      "Posters & Talks",
      "Service"
    ]

    const aIndex = order.indexOf(a.displayName)
    const bIndex = order.indexOf(b.displayName)

    if (aIndex !== -1 || bIndex !== -1) {
      if (aIndex === -1) return 1
      if (bIndex === -1) return -1
      return aIndex - bIndex
    }

    const aYear = Number(a.slugSegments?.[1])
    const bYear = Number(b.slugSegments?.[1])

    if (aYear && bYear) {
      return bYear - aYear
    }

    if (aYear) return -1
    if (bYear) return 1

    return a.displayName.localeCompare(b.displayName)
  },

  filterFn: (node) => {
    const omit = new Set(["tag index", "easter egg"])
    return !omit.has(node.displayName.toLowerCase())
  }
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

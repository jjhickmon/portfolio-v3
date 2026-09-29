import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    const order = [
      "Curriculum Vitae",
      "Publications",
      "Teaching",
      "Posters, Talks, and Panels",
      "Service"
    ]

    const ai = order.indexOf(a.displayName)
    const bi = order.indexOf(b.displayName)

    if (ai !== -1 && bi !== -1) return ai - bi
    if (ai !== -1) return -1
    if (bi !== -1) return 1

    if (a.isFolder !== b.isFolder) return a.isFolder ? -1 : 1
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },

  filterFn: (node) => {
    const omit = new Set(["tag index", "easter egg"])
    return !omit.has(node.displayName.toLowerCase())
  }
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

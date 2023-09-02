import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// FOR MY INFORMATION
// export interface FullPageLayout {
//   head: QuartzComponent // single component
//   header: QuartzComponent[] // laid out horizontally
//   beforeBody: QuartzComponent[] // laid out vertically
//   pageBody: QuartzComponent // single component
//   left: QuartzComponent[] // vertical on desktop, horizontal on mobile
//   right: QuartzComponent[] // vertical on desktop, horizontal on mobile
//   footer: QuartzComponent // single component
// }


// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  header: [Component.PageTitle(), Component.Search(), Component.Darkmode()],
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [],
  right: [Component.DesktopOnly(Component.TableOfContents()), Component.Backlinks()]
}

// export const defaultContentPageLayout: PageLayout = {
//   beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
//   left: [
//     Component.PageTitle(),
//     Component.MobileOnly(Component.Spacer()),
//     Component.Search(),
//     Component.Darkmode(),
//     Component.DesktopOnly(Component.TableOfContents()),
//   ],
//   right: [Component.Graph(), Component.Backlinks()],
// }

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  header: [Component.PageTitle(), Component.Search(), Component.Darkmode()],
  beforeBody: [Component.ArticleTitle()],
  left: [],
  right: [],
}

// export const defaultListPageLayout: PageLayout = {
//   beforeBody: [Component.ArticleTitle()],
//   left: [
//     Component.PageTitle(),
//     Component.MobileOnly(Component.Spacer()),
//     Component.Search(),
//     Component.Darkmode(),
//   ],
//   right: [],
// }
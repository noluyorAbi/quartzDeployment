import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean
  showComma: boolean
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  showComma: true,
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      const segments: (string | JSX.Element)[] = []

      if (fileData.dates) {
        segments.push(formatDate(getDate(cfg, fileData)!, cfg.locale))
        segments.push(formatDate(fileData.dates.modified))
      }

      // Display reading time if enabled, using 150 WPM
      if (options.showReadingTime) {
        const readingOptions = { wordsPerMinute: 150 } // Set custom WPM
        const { minutes } = readingTime(text, readingOptions)
        const totalSeconds = Math.ceil(minutes * 60)
        const displayedMinutes = Math.floor(totalSeconds / 60)
        const displayedSeconds = totalSeconds % 60
        const readingTimeText = `Reading Time: ${displayedMinutes} min ${displayedSeconds} sec` // Display
        segments.push(readingTimeText)
      }

      const segmentsElements = segments.map((segment) => <span>{segment}</span>)

      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "0.25rem",
          }}
        >
          <span className="content-meta">Created: {segments[0]}</span>
          <span className="content-meta" style={{ margin: "0 10px" }}>
            |
          </span>{" "}
          {/* Adjust margin as needed */}
          <span className="content-meta">Last modified: {segments[1]}</span>
          <span className="content-meta" style={{ margin: "0 10px" }}>
            |
          </span>{" "}
          {/* Adjust margin as needed */}
          <span className="content-meta">{segments[2]}</span>
        </div>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor

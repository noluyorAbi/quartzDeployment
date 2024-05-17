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
        const readingTimeText = `${displayedMinutes} min ${displayedSeconds} sec` // Display
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
          <span
            className="content-meta"
            style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
          >
            <svg
              className="svg-icon"
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "5px" }}
            >
              <path
                d="M8 2V5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M3.5 9.08984H20.5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M11.9955 13.7002H12.0045"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M8.29431 13.7002H8.30329"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M8.29492 16.7002H8.3039"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {segments[0]}
          </span>
          <span className="content-meta" style={{ margin: "0 10px" }}>
            |
          </span>
          <span
            className="content-meta"
            style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
          >
            <svg
              className="svg-icon"
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "5px" }}
            >
              <path
                d="M8 2V5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M3.5 9.08984H20.5"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.21 15.7698L15.6701 19.3098C15.5301 19.4498 15.4 19.7098 15.37 19.8998L15.18 21.2498C15.11 21.7398 15.45 22.0798 15.94 22.0098L17.29 21.8198C17.48 21.7898 17.75 21.6598 17.88 21.5198L21.4201 17.9798C22.0301 17.3698 22.3201 16.6598 21.4201 15.7598C20.5301 14.8698 19.82 15.1598 19.21 15.7698Z"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.7002 16.2798C19.0002 17.3598 19.8402 18.1998 20.9202 18.4998"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M11.9955 13.7002H12.0045"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M8.29431 13.7002H8.30329"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M8.29492 16.7002H8.3039"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {segments[1]}
          </span>
          <span className="content-meta" style={{ margin: "0 10px" }}>
            |
          </span>
          <span
            className="content-meta"
            style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
          >
            <svg
              className="svg-icon-book"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="15px"
              height="15px"
              viewBox="0 0 88.965 88.966"
              xmlSpace="preserve"
              style={{ marginRight: "5px" }}
            >
              <g>
                <g>
                  <polygon points="66.436,56.656 61.639,56.656 61.639,72.438 75.096,72.438 75.096,67.641 66.436,67.641" />
                  <path
                    d="M65.049,46.49v-3.342V23.541c0,0,0.008-6.385,0-6.465l-3.746-7.59l3.324-6.32c0.354-0.67,0.33-1.475-0.062-2.121
          C64.174,0.397,63.471,0,62.715,0H5.301C4.11,0,3.143,0.967,3.143,2.16l0.052,80.307h10.369V16.841H7.461V4.32h51.68l-2.186,4.15
          c-0.328,0.625-0.332,1.369-0.007,1.998l3.295,6.373h-42.43v65.625h7.915h6.818h14.526h2.236c3.865,4,9.273,6.5,15.264,6.5
          c11.719,0,21.25-9.532,21.25-21.25C85.825,56.158,76.547,46.746,65.049,46.49z M64.575,81.966c-7.857,0-14.25-6.394-14.25-14.25
          s6.393-14.25,14.25-14.25s14.25,6.394,14.25,14.25S72.432,81.966,64.575,81.966z"
                  />
                </g>
              </g>
            </svg>
            {segments[2]}
          </span>
        </div>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style

  return ContentMetadata
}) satisfies QuartzComponentConstructor

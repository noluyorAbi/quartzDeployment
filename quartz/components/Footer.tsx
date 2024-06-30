// Import necessary dependencies and types
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
  paypalMeLink: string
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    const paypalMeLink = opts?.paypalMeLink ?? "https://paypal.me/myuninotes"

    return (
      <footer className={`${displayClass ?? ""} ${style.footer}`}>
        <hr />
        {/* This section is commented out but can be used for additional footer elements
          {i18n(cfg.locale).components.footer.createdWith}{" "}
       <p>
          <a href="https://github.com/username">username</a> © {year}
          <br />
          Made with <a href="https://github.com/jackyzha0/quartz">Quartz v{version}</a>
        </p>
          */}
        <p>
          If this site has been helpful, consider supporting me with a donation:
          <a href={paypalMeLink} target="_blank" rel="noopener noreferrer">
            {" "}
            Donate via PayPal
          </a>
        </p>
        <a href="/The-value-of-the-cloak-is-known-in-the-rain.">
          The value of the cloak is known in the rain.
        </a>
        <br />
        <br />
        <a href="mailto:contact@myuninotes.com">contact@myuninotes.com</a>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) as QuartzComponentConstructor

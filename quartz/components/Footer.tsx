import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <a>The value of the cloak is known in the rain.</a>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://github.com/noluyorAbi">noluyorAbi</a> © {year}
          <br />
          <span>
            Made with<a href="https://github.com/jackyzha0/quartz"> Quartz v{version}</a>
          </span>
        </p>
        <a href="mailto:contact@myuninotes.com">contact@myuninotes.com</a>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor

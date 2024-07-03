import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  return (
    <article className="popover-hint" style={{ textAlign: "center" }}>
      <h1>404</h1>
      <p>
        Oops! It seems you've stumbled upon a page that doesn't exist... yet. Don't worry, it's not
        you, it's probaly me. If you followed a link to get here, I am likely working on this page
        right now. Otherwise, you might have entered an incorrect URL. Why not visit the{" "}
        <a href="/">Homepage</a> and try another page?
      </p>
      <p>
        If this page has been unfinished for a long time or if there is a high demand for it, please
        leave a comment below to let me know.
      </p>
      <p>
        While you're here, why not type <code>kirby</code> on your keyboard?
      </p>
      <hr
        style={{
          border: "none",
          height: "2px",
          background: "linear-gradient(to right, #f0f0f0, #ccc, #f0f0f0)",
          margin: "4rem auto 5rem",
          width: "80%",
        }}
      />
      <div id="disqus_thread" style={{ marginTop: "2rem" }}></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function() {
          var d = document, s = d.createElement('script');
          s.src = 'https://myuninotes.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
        })();
      `,
        }}
      />
      <noscript>
        Please enable JavaScript to view the{" "}
        <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
      </noscript>
      <script src="https://rawgit.com/WeiChiaChang/Easter-egg/master/easter-eggs-collection.js"></script>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor

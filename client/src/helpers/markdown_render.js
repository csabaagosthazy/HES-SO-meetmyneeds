import * as commonmark from "commonmark";

const markdown_render = (markdown_string) => {
    const parser = new commonmark.Parser();
    /*
    The `{safe: true}` acts as a defense against stored XSS (Cross-site scripting). I doubt that administrators would
    inject HTML tags on purpose in the database, but I'd rather make sure that if a raw HTML tag is present (attack or
    malicious user), it is not rendered to the web browser but neutralised or rendered inoperative.

    For this, we use the `safe` option on the Commonmark's HTML renderer. The option replaces the raw HTML tags with
    `<!-- raw HTML omitted -->`. If the desired behavior is to escape ─ transform `<` into `&lt;` ─ or apply a whitelist
    of HTML tags, another library should be used instead of the `safe` option.

    See: https://github.com/commonmark/commonmark.js#a-note-on-security
     */
    const htmlRenderer = new commonmark.HtmlRenderer({ safe: true });
    const markdown_string_ast = parser.parse(markdown_string);
    const rendered_markdown_string = htmlRenderer.render(markdown_string_ast);

    // The substring deletes the <p> wrapper and keeps only what's inside that wrapper
    return rendered_markdown_string.substring(3, rendered_markdown_string.length - 5);
}

export default markdown_render;
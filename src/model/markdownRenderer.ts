import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

const md = markdownIt("default", {
    linkify: true,
    typographer: true
});

md.use(markdownItAttrs);

export default md;
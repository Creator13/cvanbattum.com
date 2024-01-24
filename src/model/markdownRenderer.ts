import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

const md = markdownIt("default", {
    linkify: true,
    typographer: true,
    html: true
});

md.use(markdownItAttrs);

const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
};

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    // If you are sure other plugins can't add `target` - drop check below
    const aIndex = tokens[idx].attrIndex('target');

    if (aIndex < 0) {
        tokens[idx].attrPush(['target', '_blank']); // add new attribute
    }

    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self);
};

export default md;
import markdown_render from "../markdown_render";

describe('Markdown renderer', () => {
    it('parses input markdown without paragraph wrappers', () => {
        expect(markdown_render('Hi *mom*!')).toEqual('Hi <em>mom</em>!')
    })

    it('neutralises existing HTML tags', () => {
        expect(markdown_render(`Hi<script>alert('Hello there !')</script> mom!`))
            .toEqual('Hi<!-- raw HTML omitted -->alert(\'Hello there !\')<!-- raw HTML omitted --> mom!');
    })

    it('removes javascript: links', () => {
        expect(markdown_render(`[Hi](javascript:void(0)) mom!`))
            .toEqual('<a>Hi</a> mom!');
    })
})
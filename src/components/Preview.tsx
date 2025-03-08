import Markdown from 'react-markdown'

interface Props {
    textInput: string
}
function Preview({ textInput }: Props) {
    return (
        <div className="markdown-content p-4">
            <Markdown>{textInput}</Markdown>
        </div>
    )
}

export default Preview;

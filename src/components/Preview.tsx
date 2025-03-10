import Markdown from 'react-markdown'
interface Props {
    textInput: string
}
function Preview({ textInput }: Props) {
    const exportHTML = () => {
        const previewElement = document.querySelector('.markdown-content')
        if (!previewElement) return

        const htmlContent = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <title>Exported HTML</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; background: #fff; color: #000; }
            </style>
          </head>
          <body>${previewElement.innerHTML}</body>
        </html>`;

        const blob = new Blob([htmlContent], { type: 'text/html' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'exported.html'
        a.click()
        URL.revokeObjectURL(url)
      };

    return (
        <>
            <button onClick={exportHTML} className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white px-4 py-2 rounded-lg">
                Export as HTML
            </button>
            <div className="markdown-content p-4 border border-gray-400 mt-4">
                <Markdown>{textInput}</Markdown>
            </div>
        </>
    )
}

export default Preview

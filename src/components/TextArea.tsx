
import { ChangeEvent } from 'react'
interface Props {
    setTextInput: (event: string) => void
}
function TextArea({setTextInput}: Props) {
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextInput(event.target.value);
    };
    return (
        <>
            <p className="pb-4">Begin typing below</p>
            <textarea className="w-full p-4" onChange={handleChange} />
        </>
    )
}

export default TextArea;

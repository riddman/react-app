import { useState } from 'react'

interface Props {
    children: string,
    showLength: number
}
function Expand({children, showLength}: Props) {
    const [isExpanded, setExpanded] = useState(false)
    return (
        <div>
            { isExpanded ? children : children.substring(0, showLength) + '...' }
            <br/>
            <button onClick={() => setExpanded(!isExpanded)}>{ isExpanded == true ? 'Less' : 'More' }</button>
        </div>
    )
}

export default Expand
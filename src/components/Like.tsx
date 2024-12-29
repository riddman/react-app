import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

interface Props {
    onClick: () => void
}

export default ({onClick}: Props) => {
    const [likeStatus, setLikeStatus ] = useState(false);

    const toggle = () => {
        setLikeStatus(!likeStatus);
        onClick();
    }

    if (likeStatus == false) {
        return (
            <FaRegHeart color="red" onClick={toggle} size={20}/>
        );
    }

    return (
        <FaHeart color="red" onClick={toggle} size={20}/>
    );

}
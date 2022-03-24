import React from 'react';
import { Link } from "react-router-dom";

const Page3 = () => {
    return (
        <>
            <div>I am Page3</div>

            <button>
                <Link to="/page1">
                    Page 1
                </Link>
            </button>

            <button>
                <Link to="/page2">
                    Page 2
                </Link>
            </button>
        </>
    )
}

export default Page3;

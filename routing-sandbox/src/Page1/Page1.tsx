import React from 'react';
import { Link } from 'react-router-dom';

const Page1 = () => {
    return (
        <>
            <div>I am Page1</div>
            <button>
                <Link to="/Page2">
                    Page 2
                </Link>
            </button>

            <button>
                <Link to="/Page3">
                    Page 3
                </Link>
            </button>
        </>
    )
}

export default Page1;

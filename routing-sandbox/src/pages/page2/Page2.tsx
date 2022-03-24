import React from 'react';
import { Link } from 'react-router-dom';

const Page2 = () => {
    return (
        <>
            <div>I am Page2</div>

            <button>
                <Link to="/page1">
                    Page 1
                </Link>
            </button>

            <button>
                <Link to="/page3">
                    Page 3
                </Link>
            </button>
        </>
    )
}

export default Page2;

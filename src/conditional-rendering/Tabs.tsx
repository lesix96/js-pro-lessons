import { useState } from "react";

const Tab1 = () => {
    return (
        <p>Content for Tab1</p>
    )
}

const Tab2 = () => {
    return (
        <p>Content for Tab2</p>
    )
}

const Tab3 = () => {
    return (
        <p>Content for Tab3</p>
    )
}

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    // @ts-ignore
    const handleTab = (e) => {
        setActiveTab(+e.target.getAttribute('data-name'));
    }

    console.log(activeTab);
    return (
        <>
            <button data-name={1} onClick={handleTab}>Tab1</button>
            <button data-name={2} onClick={handleTab}>Tab2</button>
            <button data-name={3} onClick={handleTab}>Tab3</button>

            { activeTab === 1 && <Tab1 /> }
            { activeTab === 2 && <Tab2 /> }
            { activeTab === 3 && <Tab3 /> }

            {
                activeTab === 1
                    ? <Tab1 />
                    : activeTab === 2
                    ? <Tab2 />
                    : activeTab === 3
                    ? <Tab3 />
                    : null
            }

            <p>{`Active tab is ${activeTab}`}</p>
            <p>Content for { activeTab === 1 ? 'Tab1' : activeTab === 2 ? 'Tab2' : activeTab === 3 ? 'Tab3' : null }</p>
        </>
    )
}

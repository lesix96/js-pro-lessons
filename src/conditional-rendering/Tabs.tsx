import React, { useState } from "react";

const Tab1: React.FC = () => {
    return (
        <p>Content for Tab1</p>
    )
}

const Tab2: React.FC = () => {
    return (
        <p>Content for Tab2</p>
    )
}

const Tab3: React.FC = () => {
    return (
        <p>Content for Tab3</p>
    )
}

export const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTab = (event: React.MouseEvent<HTMLButtonElement>) => {
        setActiveTab(Number((event.target as HTMLButtonElement).getAttribute('data-name')));
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

import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const Pagination = () => {
    const [active, setActive] = useState(1);
    const lastVisiblePage = 1032;

    const getItemProps = (index) => ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
        className: "rounded-full",
    });

    const next = () => {
        if (active === lastVisiblePage) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    const renderButtons = () => {
        const buttons = [];
        for (let i = 1; i <= lastVisiblePage; i++) {
            buttons.push(
                <Button key={i} {...getItemProps(i)}>
                    {i}
                </Button>
            );
        }
        return buttons;
    };

  return (
    <div className="flex m-5 items-center gap-4">
            <button
                variant="text"
                className="flex items-center gap-2 rounded-full"
                onClick={prev}
                disabled={active === 1}
            >
                <FaArrowLeftLong />
                Previous
            </button>
            <div className="flex items-center gap-2">{renderButtons()}</div>
            <button
                variant="text"
                className="flex items-center gap-2 rounded-full"
                onClick={next}
                disabled={active === lastVisiblePage}
            >
                Next
                <FaArrowRightLong />
            </button>
        </div>
  )
}

export default Pagination
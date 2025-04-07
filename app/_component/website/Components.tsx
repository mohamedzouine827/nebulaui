"use client"
import React, { useState, useEffect } from 'react';
import Component from './Component';

export default function Components() {
    const [componentsPerRow, setComponentsPerRow] = useState(1);

    // Update the number of components per row based on window width
    const updateComponentsCount = () => {
        const width = window.innerWidth;

        if (width > 1500) {
            setComponentsPerRow(4);
        } else if (width > 1280) {
            setComponentsPerRow(3);
        } else if (width > 1024) {
            setComponentsPerRow(2);
        } else {
            setComponentsPerRow(1);
        }
    };

    useEffect(() => {
        // Run the function initially
        updateComponentsCount();

        // Listen for resize events to update components count
        window.addEventListener('resize', updateComponentsCount);

        // Cleanup event listener when component is unmounted
        return () => {
            window.removeEventListener('resize', updateComponentsCount);
        };
    }, []);

    // Create an array of 12 elements to render
    const totalComponents = 12;

    return (
        <section className='flex flex-col items-center justify-center gap-12 py-12'>
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-[32px] font-medium leading-snug">Components</h1>
                <h2 className="text-base font-normal text-center max-w-[907px] text-gray-500">
                    A collection of beautifully crafted, high-performance components with seamless animations—designed to impress and enhance user experience.
                </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-10">
                {/* Render 12 components, split across rows based on the screen size */}
                {[...Array(totalComponents)].map((_, index) => (
                    <Component key={index} Title="HEkko" />
                ))}
            </div>
        </section>
    );
}

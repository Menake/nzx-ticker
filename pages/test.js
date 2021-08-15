import { useEffect, useState } from "react";

export default function Index() {

    useEffect(() => {
        const getData = async () => {
            const url = 'https://feeds.companyresearch.nzx.com/data/prices.php?format=JSON';
            const response = await fetch(url, {
                method: 'GET',
                mode: 'no-cors'
            });

            if (!response.ok) return

            const tickerData = await response.json();
            console.log(tickerData);
        }

        getData();
    }, []);

    return (
        <div className="h-32">
            test page
        </div>
    )
}

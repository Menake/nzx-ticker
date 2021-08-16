import { useEffect, useState } from 'react'

export const usePrices = () => {
    const [prices, setPrices] = useState([])

    const fetchPrices = async () => {
        const response = await fetch('https://feeds.companyresearch.nzx.com/data/prices.php?format=JSON');
        const json = await response.json();
        setPrices(json.prices);
    }

    useEffect(() => {
        fetchPrices()
    }, [])

    return [prices, fetchPrices]
}

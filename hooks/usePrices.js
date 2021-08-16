import { useEffect, useState } from 'react'

const corsProxyUrl = 'http://fathomless-scrubland-94941.herokuapp.com/'

export const usePrices = () => {
    const [prices, setPrices] = useState([])

    const fetchPrices = async () => {
        const response = await fetch(`${corsProxyUrl}https://feeds.companyresearch.nzx.com/data/prices.php?format=JSON`);
        const json = await response.json();
        setPrices(json.prices);
    }

    useEffect(() => {
        fetchPrices()
    }, [])

    return [prices, fetchPrices]
}

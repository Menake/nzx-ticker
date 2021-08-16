import { usePrices } from 'hooks/usePrices';

export default function Index() {
    const [prices, get] = usePrices();

    return (
        <pre>
            {JSON.stringify(prices)}
        </pre>
    )
}

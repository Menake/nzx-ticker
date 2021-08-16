import { usePrices } from 'hooks/usePrices';

export default function Index() {
    const [prices, get] = usePrices();

    return (
        <pre>
            {prices}
        </pre>
    )
}

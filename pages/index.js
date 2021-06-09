import Ticker from "@components/Ticker"
import TickerItem from "@components/TickerItem"
import { useEffect, useState } from "react";

export default function Index() {
    const [data, setData] = useState([]);

    useEffect(() => {
        import('../data/financialData')
            .then(data => {
                const shuffled = data.default.sort(() => 0.5 - Math.random());
                setData(shuffled.slice(0, 50))
            });
    }, [])

    return (
        <div className="h-32">
            <Ticker>
                {data.map((data, idx) => <TickerItem key={idx} {...data} />)}
            </Ticker>
        </div>
    )
}

export default function Ticker({ children }) {
    return (
        <div className="flex bg-black w-full overflow-hidden flex-0">
            <div className="flex flex-0 w-full animate-ticker">
                {children}
            </div>
        </div>
    )
}
'use client'

export function HistoryIcons({history}) {
    return (
        <div className="history-container">
            {
                history.map((h, index)=> {
                    return (
                        <div key={index}>
                            {h === 0 ? <span className="history-icon history-icon-0"></span> : null}
                            {h === 1 ? <span className="history-icon history-icon-1"></span> : null}
                            {h === 2 ? <span className="history-icon history-icon-2"></span> : null}
                            {h === 3 ? <span className="history-icon history-icon-3"></span> : null}
                            {h === 4 ? <span className="history-icon history-icon-4"></span> : null}
                            {h === 5 ? <span className="history-icon history-icon-5"></span> : null}
                        </div>
                    )
                })
            }
            
        </div>
    );
}
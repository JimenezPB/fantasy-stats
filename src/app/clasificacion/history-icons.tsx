'use client'

export function HistoryIcons({history}) {
    return (
        <div className="flex items-center gap-2">
            {history === 0 ? <span className="history-icon history-icon-0"></span> : null}
            {history === 1 ? <span className="history-icon history-icon-1"></span> : null}
            {history === 2 ? <span className="history-icon history-icon-2"></span> : null}
            {history === 3 ? <span className="history-icon history-icon-3"></span> : null}
            {history === 4 ? <span className="history-icon history-icon-4"></span> : null}
            {history === 5 ? <span className="history-icon history-icon-5"></span> : null}
        </div>
    );
}
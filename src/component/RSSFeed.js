import React from 'react';

const RSSFeed = () => {
    return (
        <div className="rss-feed widget">
            <h3>RSS Feed</h3>
            <ul>
                <li>pfSense 2.3.2-p1 RELEASE Now Available!</li>
                <li>2.4 pre-alpha snapshots now available.</li>
                <li>pfSense moves to Apache License</li>
                {/* 다른 RSS 항목 추가 */}
            </ul>
        </div>
    );
}

export default RSSFeed;

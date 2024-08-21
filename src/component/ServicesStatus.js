import React from 'react';

const ServicesStatus = () => {
    return (
        <div className="services-status widget">
            <h3>Services Status</h3>
            <ul>
                <li>avahi: Running</li>
                <li>bsnmpd: Running</li>
                <li>dhcpd: Running</li>
                <li>dpinger: Running</li>
                <li>ipsec: Running</li>
                {/* 다른 서비스 추가 */}
            </ul>
        </div>
    );
}

export default ServicesStatus;
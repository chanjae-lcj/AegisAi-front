import React from 'react';

const SystemInformation = () => {
    return (
        <div className="system-info widget">
            <h3>System Information</h3>
            {/* 시스템 정보를 표시 */}
            <ul>
                <li>Name: pfSense.localdomain</li>
                <li>System: Netgate SG-4860</li>
                <li>Version: 2.3.3-DEVELOPMENT (amd64)</li>
                <li>Platform: pfSense</li>
                <li>CPU Type: Intel(R) Atom(TM) CPU C2558 @ 2.40GHz</li>
                <li>Memory usage: 7% of 8153 MiB</li>
                {/* 다른 정보 추가 */}
            </ul>
        </div>
    );
}

export default SystemInformation;
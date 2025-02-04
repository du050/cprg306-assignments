import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
    return (
        <div>
            <h1>Your Name</h1>
            <p>
                <Link href="https://github.com/du050/cprg306-assignments">
                    <p>GitHub Repository</p>
                </Link>
            </p>
        </div>
    );
};

export default StudentInfo;
import React from 'react';
export const metadata = {
    title: 'dashboard | Next Hero',
    description: 'Generated by create next app',
}

const dashboardLayout = ({children}) => {
    return (
        <div>
            <div>sidebar</div>
            {children}
        </div>
    );
};

export default dashboardLayout;
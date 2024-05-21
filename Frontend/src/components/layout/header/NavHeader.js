import React from 'react';
function NavHeader({children}) {
    return (
        <>
            <div className="navHeader">
                {children}
            </div>
        </>
    );
}

export default NavHeader;
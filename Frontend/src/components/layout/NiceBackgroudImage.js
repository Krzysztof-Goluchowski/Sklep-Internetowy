function NiceBackgroundImage() {
    const pStyle = {
        color: 'white',
        margin: '5px',
        padding: '0px',
        fontFamily: 'Courier New, monospace',
        fontStyle: 'italic',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const bigTextStyle = {
        fontWeight: 'bold',
        fontSize: '75px',
        marginLeft: '20px',
        marginRight: '20px'
    };

    const smallTextStyle = {
        fontSize: '50px'
    };
    return (
        <>
            <div className="NiceBackgroundImage">
                <p style={pStyle}>
                    <span style={bigTextStyle}>SUKCES  </span> <span style={smallTextStyle}>to suma</span> <span style={bigTextStyle}>MAŁYCH</span>
                </p>
                <p style={pStyle}><span style={smallTextStyle}>wysiłków powtarzanych</span></p>
                <p style={pStyle}>
                    <span style={bigTextStyle}>DZIEŃ PO DNIU</span>
                </p>
            </div>
        </>
    );
}

export default NiceBackgroundImage;
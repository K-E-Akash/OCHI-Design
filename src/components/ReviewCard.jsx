import React from 'react'

function ReviewCard() {
    return (
        <>
            <div className="reviewWrap">
                <div className='sec1'>Client's firm</div>
                <div className='sec2'>
                    <p>Services</p>
                    {[].map((e, i) => (
                        <div className="servicesBtnT2">{e}</div>
                    ))}
                </div>
                <div className='sec3'>
                    <p>Client's name & details</p>
                    <img src="" alt="" />
                    <p>Desc</p>
                </div>
                <div className='sec4'>Read</div>
            </div>
        </>
    )
}

export default ReviewCard
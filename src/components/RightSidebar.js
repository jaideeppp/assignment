import React from 'react'

function RightSidebar() {
    return (
        <div className="rightSidebar">
            <img src="/img.jpg" alt="profileImage" height={150} width={150} />
            <h3>Billie Eilish</h3>
            <small>1.5mb - Modified 3 hours ago</small>
            <div>
                <img src="/wave.png" alt="wave" height={45} width={45} />
                <img src="/wave.png" alt="wave" height={45} width={45} />
                <img src="/wave.png" alt="wave" height={45} width={45} />
            </div>
            <div style={{ display: 'flex', gap: '22px', margin: '20px 0' }}>
                <div className="icon"><i class="fas fa-link"></i></div>
                <div className="icon"><i class="fas fa-ellipsis-v"></i></div>
                <div className="icon icon2"><i class="fas fa-play"></i></div>
            </div>

            <div className="images">
                <img className="image img1" src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt="profile" />
                <img className="image img2" src="https://image.flaticon.com/icons/png/512/194/194938.png" alt="wave" />
                <img className="image img3" src="/img.png" alt="wave" />
                <i class="fas fa-plus  img4"></i>
            </div>

            <div className="comment">
                <img src="/img.png" alt="wave" height={45} width={45} />
                <p><span>@Marie</span> We need to make sure to review the cover</p>
            </div>
            <div className="comment">
                <img src="/img.png" alt="wave" height={45} width={45} />
                <input type="text" placeholder="Write a comment" />
            </div>
        </div>
    )
}

export default RightSidebar

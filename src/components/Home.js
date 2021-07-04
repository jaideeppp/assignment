import React, { useState } from 'react'

function Home() {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);

    return (
        <div>
            <h1>Home</h1>
            <div className="home">
                <div className="home-1">
                    <div className="home-1-img">
                        <img src="/homeImg.jpg" alt="profileImage" height={250} width={250} />
                        <div className="imgText">
                            <h3>Scene</h3>
                            <p>3mb - 2 hours ago</p>
                        </div>
                    </div>
                    <div>
                        <h2>Project</h2>
                        <p>We should be ready to reveal the new project next week and we are very excited</p>
                        <div className="checkbox">
                            <input type="checkbox" onClick={() => setCheck1(!check1)} />
                            {
                                check1 ? <p><s>Creating storyboard </s><span>@Bruce Patterson</span></p> :
                                    <p>Creating storyboard <span>@Bruce Patterson</span></p>
                            }
                        </div>
                        <div className="checkbox" >
                            <input type="checkbox" onClick={() => setCheck2(!check2)} />
                            {
                                check2 ? <p><s>Preparing the source files</s>  <span>@Charlie Huff</span></p> :
                                    <p>Preparing the source files <span>@Charlie Huff</span></p>
                            }
                        </div>
                    </div>
                </div>
                <div className="home-2">
                    <div className="home-2-header">
                        <h2>Recent</h2>
                        <div className="home-2-icons">
                            <div className="icon"><i class="fas fa-th-large"></i></div>
                            <div className="icon"><i class="fas fa-grip-lines"></i></div>
                            <div className="icon icon2"><i class="fas fa-plus"></i></div>
                        </div>
                    </div>
                    <div className="home-2-items">
                        <div className="home-2-subitem">
                            <i class="fas fa-folder"></i>
                            <h3>Project Venus</h3>
                        </div>
                        <p>Folder</p>
                    </div>
                    <div className="home-2-items">
                        <div className="home-2-subitem">
                            <div className="org-icon"><i class="fas fa-music"></i></div>
                            <h3>Billie Eilish</h3>
                        </div>
                        <p>Music</p>
                    </div>
                    <div className="home-2-items">
                        <div className="home-2-subitem">
                            <div className="org-icon"><i class="far fa-image"></i></div>
                            <h3>City Skyline</h3>
                        </div>
                        <p>Picture</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home

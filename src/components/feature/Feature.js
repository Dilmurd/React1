import "./Feature.css"
import img from "../../assets/IMAGE (2).png"
import img2 from "../../assets/Frame (5).png"
import imgg from "../../assets/IMAGE (3).png"

function Feature(){
    return(
        <main className="main">
            <section className="feature">
                <div className="container">
                    <div className="feature__title">
                        <p>Featured Posts</p>
                        <div></div>
                    </div>
                    <div className="feature__wrapper">
                        <div className="feature__card">
                            <div className="text">
                            <p className="fea__title">The Road Ahead</p>
                            <p className="fea__subtitle">The road ahead might be paved - it might not be.</p>
                            <div className="feature__acc">
                                <img src={img} alt="" />
                                <p className="fea__inf">Mat Vogels</p>
                                <p className="fea__data">September 25, 2015</p>
                            </div>
                            </div>
                        </div>
                        <div className="feature__card">
                        <img src={img2} alt="" />
                            <div className="text">
                            <p className="fea__title">The Road Ahead</p>
                            <p className="fea__subtitle">The road ahead might be paved - it might not be.</p>
                            <div className="feature__acc">
                                <img src={img} alt="" />
                                <p className="fea__inf">Mat Vogels</p>
                                <p className="fea__data">September 25, 2015</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="most">
                <div className="container">
                    <div className="most__title">
                        <p>Most Recent</p>
                    </div>
                    <div className="most__wrapper">
                        <div className="most__card">
                            <img src={imgg} alt="" />
                                <p className="most__subtitle">Still Standing Tall</p>
                                <p className="most__desc">Life begins at the end of your comfort zone.</p>
                                <div className="div"></div>
                                <div className="most__acc">
                                    <img src={img} alt="" />
                                    <p className="most__inf">William Wong</p>
                                    <p>9/25/2015</p>
                                </div>
                        </div>
                        <div className="most__card">
                            <img src={imgg} alt="" />
                                <p className="most__subtitle">Still Standing Tall</p>
                                <p className="most__desc">Life begins at the end of your comfort zone.</p>
                                <div className="div"></div>
                                <div className="most__acc">
                                    <img src={img} alt="" />
                                    <p className="most__inf">William Wong</p>
                                    <p>9/25/2015</p>
                                </div>
                        </div>
                        <div className="most__card">
                            <img src={imgg} alt="" />
                                <p className="most__subtitle">Still Standing Tall</p>
                                <p className="most__desc">Life begins at the end of your comfort zone.</p>
                                <div className="div"></div>
                                <div className="most__acc">
                                    <img src={img} alt="" />
                                    <p className="most__inf">William Wong</p>
                                    <p>9/25/2015</p>
                                </div>
                        </div>
                        <div className="most__card">
                            <img src={imgg} alt="" />
                                <p className="most__subtitle">Still Standing Tall</p>
                                <p className="most__desc">Life begins at the end of your comfort zone.</p>
                                <div className="div"></div>
                                <div className="most__acc">
                                    <img src={img} alt="" />
                                    <p className="most__inf">William Wong</p>
                                    <p>9/25/2015</p>
                                </div>
                        </div>
                        <div className="most__card">
                            <img src={imgg} alt="" />
                                <p className="most__subtitle">Still Standing Tall</p>
                                <p className="most__desc">Life begins at the end of your comfort zone.</p>
                                <div className="div"></div>
                                <div className="most__acc">
                                    <img src={img} alt="" />
                                    <p className="most__inf">William Wong</p>
                                    <p>9/25/2015</p>
                                </div>
                        </div>
                        <div className="most__card">
                            <img src={imgg} alt="" />
                                <p className="most__subtitle">Still Standing Tall</p>
                                <p className="most__desc">Life begins at the end of your comfort zone.</p>
                                <div className="div"></div>
                                <div className="most__acc">
                                    <img src={img} alt="" />
                                    <p className="most__inf">William Wong</p>
                                    <p>9/25/2015</p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Feature
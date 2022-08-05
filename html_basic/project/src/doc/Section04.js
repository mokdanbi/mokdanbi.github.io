const Section04 = () => {
    return (
        <section className="About02 basicSection">
            <h2>
                <span>CEO's</span> GREETINGS
            </h2>
            <p>새로운 미래를 열어가는 루피테마</p>
            <div className="inner">
                <div className="top">
                    <figure>
                        <img src="./img/main01.jpg" alt="" />
                    </figure>
                </div>
                <div className="left">
                    <p className="tit">
                        웹서비스의 <span className="mainColor">새로운 미래를</span>
                        <br />
                        <span className="mainColor">루피테마</span>가 만들겠습니다.
                    </p>
                </div>
                <div className="right">
                    <div className="des">
                        <p className="tit">
                            안녕하십니까?<br />
                            루피테마 홈페이지를 방문해주셔서 감사합니다.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                            Veritatis laborum nesciunt velit qui, consequuntur quaerat eligendi
                            non amet quas quibusdam?
                        </p>

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            <br />
                            Repellat incidunt illo, asperiores fugiat quo quam fuga magnam
                            beatae
                            <br />
                            culpa perspiciatis consequuntur natus obcaecati iure repudiandae.
                        </p>

                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            <br />
                            Tenetur, modi sequi quaerat architecto voluptate quasi.
                        </p>

                        <p>루피테마 임직원 일동</p>
                    </div>
                </div>
            </div>

            <div className="inner">
                <h3>주요현황</h3>
                <div className="responsive-table">
                    <table className="table">
                        <caption>* caption</caption>
                        <tbody>
                            <tr>
                                <th>주 소</th>
                                <td>부전로 7 1404호</td>
                                <th>전화번호</th>
                                <td>010-2640-1940</td>
                            </tr>
                            <tr>
                                <th>좋아하는 거</th>
                                <td>치킨 사랑</td>
                                <th>하고싶은 거</th>
                                <td>놀고 먹기</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Section04;
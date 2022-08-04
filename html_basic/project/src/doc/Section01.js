const Section01 = () => {
  return (
    <section className="about basicSection">
      <h2>
        <span className="t_b">CEO's</span> GREETINGS
      </h2>
      <p>새로운 미래를 열어가는 루피테마</p>
      <div className="container">
        <div className="des">
          <p className="tit">
            웹서비스의 <span className="t_b">새로운 미래를</span>
            <br />
            <span className="t_b">루피테마</span>가 만들어 가겠습니다.
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
        <figure>
          <img src="../img/hd01.jpg" alt="" />
        </figure>
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
  );
};

export default Section01;

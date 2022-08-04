const Section03 = () => {
  return (
    <section className="Business02 basicSection">
      <h2>
        <span>OUR</span> BUSINESS
      </h2>
      <p>루피테마의 다양한 사업영역을 소개합니다.</p>
      <div className="container">
        <div className="left">
          <figure>
            <img src="./img/hd04.jpg" alt="" />
          </figure>
        </div>
        <div className="right">
          <h3>심플하지만 다 갖춘 루피테마</h3>
          <p>홈페이지 제작 관련 궁금하신 사항은 언제든지 문의 바랍니다.</p>
          <ul className="dotList">
            <li>심플하지만 다 갖춘 인덱스</li>
            <li>PC+모바일 반응형 디자인</li>
            <li>홈페이지에 꼭 필요한 기본 디자인 6종</li>
            <li>제품 전용 게시판 2종</li>
            <li>부트스트랩이 아닌 CSS기반 반응형</li>
          </ul>
          <div className="bottom">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Dolores omnis hic natus ratione minus harum voluptatibus
            error ex esse. Cum!
          </div>
        </div>
      </div>
      <div className="inner">
        <h3>심플하지만 다 갖춘 루피테마</h3>
        <ul className="row">
          <li data-num="01">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li data-num="02">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li data-num="03">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li data-num="04">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section03;

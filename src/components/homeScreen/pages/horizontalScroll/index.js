import Tag from "./Tag";
import { useState, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";

export default function HorizontalList({ list }) {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const baseUrl = "https://image.tmdb.org/t/p/";
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.5 });
  };
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.5 });
    gsap.to(e.target, { scale: 1 });
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <Container>
      {scrollX !== 0 && (
        <Button
          className="prev"
          onClick={() => slide(-300)}
          onMouseEnter={(e) => anim(e)}
          onMouseLeave={(e) => anim2(e)}
        >
          <i className="fa fa-angle-left">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </i>
        </Button>
      )}
      <Unlisted ref={scrl} onScroll={scrollCheck}>
        {list.map((d, i) => (
          <Tag
            el={d}
            data={<img src={baseUrl + "w200" + d.poster_path} />}
            key={i}
          />
        ))}
      </Unlisted>
      {!scrolEnd && (
        <Button
          className="next"
          onClick={() => slide(+300)}
          onMouseEnter={(e) => anim(e)}
          onMouseLeave={(e) => anim2(e)}
        >
          <i className="fa fa-angle-right">
            <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
          </i>
        </Button>
      )}
    </Container>
  );
}

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 90vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
`;

const Unlisted = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  max-width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    background: transparent; /* make scrollbar transparent */
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
  li {
    background: black;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    margin: 0 4px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  border: 0;
  background-color: black;
  font-size: 24px;
  margin: 0 8px;
  border-radius: 20px;
  color: #fafafafa;
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface childProps {
   pageNum: number;
   activePage: number;
   setActivePage: (idx: number) => void;
}

function PageList({ pageNum, activePage, setActivePage }: childProps) {
   const [pageArray, setPageArray] = useState<JSX.Element[]>();

   useEffect(() => {
      let newPageArray = [];
      for (let i = 1; i <= pageNum; i++) {
         newPageArray.push(
            <Page key={i} active={activePage === i ? true : false} onClick={() => setActivePage(i)}>
               {i}
            </Page>
         );
      }
      setPageArray(newPageArray);
   }, [pageNum, activePage]);

   return <PageListStyle>{pageArray}</PageListStyle>;
}

const PageListStyle = styled.div`
   margin-bottom: 20px;
   text-align: center;
`;

const Page = styled.button<{ active: boolean }>`
   padding: 0.375rem 0.75rem;
   border-radius: 0.25rem;
   font-size: 1rem;
   line-height: 1.5;
   border: 1px solid lightgray;
   cursor: pointer;
   ${({ active }) =>
      active &&
      `
        background: gray;
        color: #fff;
  `}
   margin-right: 3px;
`;

export default PageList;

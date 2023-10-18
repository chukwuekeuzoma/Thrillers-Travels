import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from "./SectionTwo"
import SectionThree from "./SectionThree"

export default function Home() {
    return (
        <>
          <SectionOne />  
          <br/>
          <br/>
          <SectionTwo/>
          <br/>
          <SectionThree/>
        </>
    );
}

import React from "react";

import "./../../assets/css/elements/Index.css";

function Index() {
  //This is subject to structure changes in a future during multiple langs implementation

  /*
    
   
    
    */
  const indexHolder = [
    {
      sectionId: "section-1",
      sectionTitle: "What are phosphogypsums?",
    },
    {
      sectionId: "section-2",
      sectionTitle: "Consecuences",
      contents: [
        {
          sectionId: "section-2-1",
          sectionTitle: "Terrain impact",
        },
        {
          sectionId: "section-2-2",
          sectionTitle: "Hydrogeological impact",
        },
        {
          sectionId: "section-2-3",
          sectionTitle: "Visual impact",
        },
      ],
    },
    {
      sectionId: "section-3",
      sectionTitle: "Current state",
      contents: [
        {
          sectionId: "section-3-1",
          sectionTitle: "Restored zones",
        },
        {
          sectionId: "section-3-2",
          sectionTitle: "Management",
          contents: [
            {
              sectionId: "section-3-2-1",
              sectionTitle: "Cases in other places",
            },
            {
              sectionId: "section-3-2-2",
              sectionTitle: "Case of Huelva",
            },
          ],
        },
      ],
    },
    {
      sectionId: "section-4",
      sectionTitle: "Longterm solutions",
      contents: [
        {
          sectionId: "section-4-1",
          sectionTitle: "Phosphogyosums use cases",
        },
        {
          sectionId: "section-4-2",
          sectionTitle: "Phosphogypsums based companies",
          contents: [
            {
              sectionId: "section-4-2-1",
              sectionTitle: "Prayon",
            },
            {
              sectionId: "section-4-2-2",
              sectionTitle: "CapturaCO2",
              contents: [
                {
                  sectionId: "section-4-2-2-1",
                  sectionTitle: "Patents",
                },
                {
                  sectionId: "section-4-2-2-2",
                  sectionTitle: "Pilot plants",
                },
              ],
            },
          ],
        },
        {
          sectionId: "section-4-3",
          sectionTitle: "University of Huelva studies",
        },
      ],
    },
  ];

  function renderNode(node) {
    if (!node.contents)
      return (
        <a className="index-anchor" href={node.sectionId}>
          {node.sectionTitle}
        </a>
      );

    return (
      <>
        <a className="index-anchor" href={node.sectionId}>
          {node.sectionTitle}
        </a>
        {React.createElement(
          "div",
          { className: "subsection" },
          node.contents?.map((value, index) => renderNode(value))
        )}
      </>
    );
  }

  function createIndex() {
    return React.createElement(
      "div",
      { className: "index" },
      indexHolder.map((value, index) => {
        return renderNode(value);
      })
    );
  }

  return (
    <>
      {createIndex()}
    </>
  );
}

export default Index;

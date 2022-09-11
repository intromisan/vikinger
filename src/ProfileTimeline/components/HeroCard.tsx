import React, { FC } from "react";
import Card from "../../shared/components/Card";

const HeroCard: FC = () => {
  return (
    <Card>
      <div
        className="hero_container"
        style={{
          backgroundImage:
            "url(https://odindesignthemes.com/vikinger/img/cover/01.jpg)",
        }}
      >
        <div className="hero_info">
          <div className="hero_info-left"></div>
          <div className="hero_info-user"></div>
          <div className="hero_info-right"></div>
        </div>
      </div>
    </Card>
  );
};

export default HeroCard;

import React, { FC } from "react";
import Card from "../../shared/components/Card";
import UserSocial from "./UserSocial";
import UserStat from "./UserStat";

const HeroCard: FC = () => {
  return (
    <Card>
      <div className="hero_container">
        <div className="hero_background"></div>
        <div className="hero_info">
          <div className="hero_info-left">
            <UserStat title="posts" text="930" />
            <UserStat title="friends" text="82" />
            <UserStat title="visits" text="5.7k" />
            <UserStat
              title="usa"
              text="1"
              imgSrc="https://odindesignthemes.com/vikinger/img/flag/usa.png"
            />
          </div>
          <div className="hero_info-user"></div>
          <div className="hero_info-right">
            <UserSocial socialIcon="facebook" bgColor="#3763D2" />
            <UserSocial socialIcon="twitter" bgColor="#1abcff" />
            <UserSocial socialIcon="instagram" bgColor="#f8468d" />
            <UserSocial socialIcon="twitch" bgColor="#7b5dfa" />
            <UserSocial socialIcon="youtube" bgColor="#fd434f" />
            <UserSocial socialIcon="telegram" bgColor="#0088CC" />
            <UserSocial socialIcon="discord" bgColor="#7289da" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default HeroCard;

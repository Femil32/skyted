import React from "react";
import { getImg } from "../../helpers";
import UsersCard from "./UsersCard";

function Users({ businessRes, gamersRes }) {
  return (
    <section className="section-container py-16">
      <div className="flex gap-12 w-full justify-center max-md:flex-col">
        <div className="max-w-lg">
          <UsersCard
            header={businessRes?.BusinessLineTitle}
            src={getImg(businessRes?.BusinessLineImage)}
            alt="PlaneMan"
            title={businessRes?.BusinessLineCategory}
            description={businessRes?.BusinessLineDescription}
            linkText="Travel and calls « on the go »"
            link="/ces"
          />
        </div>
        <div className="max-w-lg">
          <UsersCard
            header={gamersRes?.ForGamersTitle}
            src={getImg(gamersRes?.ForGamersImage)}
            alt="gamer"
            title={gamersRes?.ForGamersCategory}
            description={gamersRes?.ForGamersDescription}
            linkText="Enjoy gaming anywhere now « on the go »"
            link="/ces"
          />
        </div>
      </div>
    </section>
  );
}

export default Users;

import React from "react";
import UsersCard from "./UsersCard";
import Gamer from "../../assets/imgs/ces/gamer.png";
import PlaneMan from "../../assets/imgs/ces/planman.png";

function Users() {
  return (
    <section className="section-container py-16">
      <div className="flex gap-12 w-full justify-center">
        <div className="max-w-lg">
          <UsersCard
            header="Business Line"
            src={PlaneMan}
            alt="PlaneMan"
            title="Mobility (B2B/B2C)"
            description="Travelers (Air passengers, Railway Passengers, Cabs) Office workers
            (Shared workspace, Home offices, Open Workspaces)"
            linkText="Travel and calls « on the go »"
            link="/ces"
          />
        </div>
        <div className="max-w-lg">
          <UsersCard
            header="For Gamers"
            src={Gamer}
            alt="gamer"
            title="Virtual World (B2B/B2C)"
            description="Enjoy playing games anywhere anytime. Scream and shout without
            the worry of disturbing others."
            linkText="Enjoy gaming anywhere now « on the go »"
            link="/ces"
          />
        </div>
      </div>
    </section>
  );
}

export default Users;
